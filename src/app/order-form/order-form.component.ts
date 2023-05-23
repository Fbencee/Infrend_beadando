import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { OrderitemService } from '../services/orderitem.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodDTO, OrderDTO, OrderitemDTO } from 'models';
import { FormBuilder } from '@angular/forms';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: OrderDTO = {
    id: 0,
    ordertime: new Date(),
    totalprice: 0,
    comments: '',
    costumer: null,
    orderitems: []
  }

  orderitems: OrderitemDTO[] =[];
  deliveryTime: number=0;

  foods: FoodDTO[] = [];
  costumerName: string ='';

  // orderForm = this.formBuilder.group({
  //   id: this.formBuilder.control(0),
  //   ordertime: this.formBuilder.control(''),
  //   totalprice: this.formBuilder.control(0),
  //   comments: this.formBuilder.control(''),
  //   costumer: this.formBuilder.control(''),
  //   orderitems: this.formBuilder.control(''),
  //   orders: this.formBuilder.control<null | OrderDTO[]>(null)
  // });


  constructor(orderService: OrderService,
    private orderitemService: OrderitemService,
    private foodService: FoodService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.order = JSON.parse(params['dto']);
      console.log('DTO object:', this.order);
    });

    this.orderitemService.getOrderItemsByOrder(this.order.id).subscribe({
      next: (orderitems) => {
        this.orderitems = orderitems;
        console.log(orderitems);
      },
      error: (err) => console.error(err)  
    })

    // this.orderitems.forEach( orderitem => {

    //   this.foodService.getOne(orderitem.food?.id).subscribe(
    //     {next: (food) => {
    //       this.foods.push(food);
    //     },
    //     error: (err) => console.error(err)  
    //   });
    // })

    console.log(this.foods);

    let latestone = this.getTheLatestDone();
    console.log(latestone);

    this.deliveryTime = latestone.getTime() - this.order.ordertime.getTime() + 20;
    
    this.costumerName =  this.order.costumer?.firstname + " "+ this.order.costumer?.lastname;

  }

  getTheLatestDone():Date {
    let endTime = this.orderitems[0].endtime;

    this.orderitems?.forEach( orderitem => {
      if (endTime < orderitem.endtime) {
        endTime = orderitem.endtime;
      }
    });

    return endTime;
  }
}
