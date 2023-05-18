import { Component, OnInit } from '@angular/core';
import { CostumerDTO, FoodDTO, OrderDTO, OvenDTO } from 'models';
import { FoodService } from '../services/food.service';
import { ToastrService } from 'ngx-toastr';
import {  ActivatedRoute, Router } from '@angular/router';
import { OrderitemService } from '../services/orderitem.service';
import { OrderitemDTO } from 'models';
import { NgTemplateOutlet } from '@angular/common';
import { OvenService } from '../services/oven.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: FoodDTO[] = [];
  orderitems: OrderitemDTO[] =[];
  totalprice: number=0;

  costumer: CostumerDTO = {
    id:0,
    firstname:'',
    lastname:'',
    email:'',
    address:'',
    phonenumber:'',
    orders:null
  }

  order: OrderDTO= {
    id:0,
    ordertime: new Date(),
    totalprice:0,
    comments:'',
    costumer:null,
    orderitems:null
  }

  constructor(private foodService: FoodService,
    private orderitemService: OrderitemService,
    private ovenService: OvenService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.totalprice=0;
    this.route.queryParams.subscribe(params => {
       this.costumer= JSON.parse(params['dto']);
       this.order.costumer = this.costumer;
      console.log('DTO object:', this.costumer);
    });

    this.foodService.getAll().subscribe({
      next: (foods) => {
        this.foods = foods;
        console.log(foods);
      },
      error: (err) => console.error(err)
    });
  }

  addFoodToCart(food: FoodDTO) {
    let startTime:Date = this.getStartTime();
    let endTime:Date = new Date();
    endTime.setTime(endTime.getTime() + food.preptime);
    this.totalprice += food.price;

    let orderitem:OrderitemDTO = {
      id:0,
      starttime: startTime,
      endtime: endTime,
      order: this.order,
      food: food,
      oven:null
    }

    this.orderitems.push(orderitem);

    // this.orderitemService.create(orderitem).subscribe({
    //   next: (orderitem) => {
    //     this.toastrService.success('Az étel sikeresen hozzáadva, id:' + orderitem.id, 'Siker');
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.toastrService.error('Az étel hozzáadása nem sikerült.', 'Hiba');
    //   }
    // });
  }

  getStartTime(): Date
  {
    let now=new Date();
    let lowestFinishTimeOven:OvenDTO={
      id:0,
      name:'',
      finishtime: new Date(),
      orderitems:null
    };

    this.ovenService.getLowestFinishTime().subscribe({
        next:(oven) => {
          lowestFinishTimeOven = oven;
          console.log(lowestFinishTimeOven);
        },
        error: (err) => console.error(err)
    })

    if(lowestFinishTimeOven.finishtime < now) {
      return now;
    }
    else {
      return lowestFinishTimeOven.finishtime;
    }
  }

  createOrder() {
    let order: OrderDTO={
      id:0,
      ordertime:new Date(),
      totalprice:this.totalprice,
      comments:'',
      costumer:this.costumer,
      orderitems:this.orderitems
    }

    this.navigateToConfirm(order);
  }

  navigateToConfirm(order: OrderDTO){
    const queryParams = { dto: JSON.stringify(order) };
    this.router.navigate(['/order-form'], { queryParams });
  }

}
