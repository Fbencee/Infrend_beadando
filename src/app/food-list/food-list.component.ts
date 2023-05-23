import { Component, OnInit } from '@angular/core';
import { CostumerDTO, FoodDTO, OrderDTO, OvenDTO } from 'models';
import { FoodService } from '../services/food.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderitemService } from '../services/orderitem.service';
import { OrderitemDTO } from 'models';
import { OvenService } from '../services/oven.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: FoodDTO[] = [];
  orderitems: OrderitemDTO[] = [];
  totalprice: number = 0;

  costumer: CostumerDTO = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phonenumber: '',
    orders: null
  }

  order: OrderDTO = {
    id: 0,
    ordertime: new Date(),
    totalprice: 0,
    comments: '',
    costumer: null,
    orderitems: null
  }

  constructor(private foodService: FoodService,
    private orderitemService: OrderitemService,
    private ovenService: OvenService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService) { }

  ngOnInit(): void {

    this.totalprice = 0;
    this.route.queryParams.subscribe(params => {
      this.costumer = JSON.parse(params['dto']);
      this.order.costumer = this.costumer;
    });

    this.foodService.getAll().subscribe({
      next: (foods) => {
        this.foods = foods;
        console.log(foods);
      },
      error: (err) => console.error(err)
    });

    this.orderService.create(this.order).subscribe({
      next: (order) => {
        this.toastrService.success('A rendelés sikeresen hozzáadva, id:' + order.id, 'Siker');
        this.order.id = order.id;
      },
      error: (err) => {
        console.log(err);
        this.toastrService.error('A rendelés hozzáadása nem sikerült.', 'Hiba');
      }
    })
  }

  addFoodToCart(food: FoodDTO) {
    let startTime: Date = this.getStartTime();
    let endTime: Date = startTime;
    endTime.setTime(endTime.getMinutes() + food.preptime);
    this.totalprice += food.price;

    let updateOven:OvenDTO = {
      id:0,
      name:'',
      finishtime: new Date()
    }

    this.ovenService.getLowestFinishTime().subscribe({
      next: (oven) => {
        updateOven.id = oven.id;
        updateOven.finishtime = oven.finishtime;
        updateOven.name = oven.name;
      },
      error: (err) => console.error(err)
    })

    let orderitem: OrderitemDTO = {
      id: 0,
      starttime: startTime,
      endtime: endTime,
      order: this.order,
      food: food
    }

    updateOven.finishtime=orderitem.endtime;
    console.log(updateOven);


    this.orderitemService.create(orderitem).subscribe({
      next: (orderitem) => {
        this.toastrService.success('A tétel sikeresen hozzáadva, id:' + orderitem.id, 'Siker');
      },
      error: (err) => {
        console.log(err);
        this.toastrService.error('A tétel hozzáadása nem sikerült.', 'Hiba');
      }
    });

    this.orderitems.push(orderitem);

    this.ovenService.update(updateOven).subscribe({
      next: (oven) => {
        this.toastrService.success('A sütő sikeresen szerkesztve, id:' + oven.id, 'Siker');
        console.log(oven);
      },
      error: (err) => {
        console.log(err);
        this.toastrService.error('A sütő szerkesztése nem sikerült.', 'Hiba');
      }
    })
  }


  getStartTime(): Date {
    let now = new Date();
    let lowestFinishTimeOven: OvenDTO = {
      id: 0,
      name: '',
      finishtime: new Date()
    };

    this.ovenService.getLowestFinishTime().subscribe({
      next: (oven) => {
        lowestFinishTimeOven = oven;
        console.log(lowestFinishTimeOven);
      },
      error: (err) => console.error(err)
    })

    if (lowestFinishTimeOven.finishtime < now) {
      return now;
    }
    else {
      return lowestFinishTimeOven.finishtime;
    }
  }

  createOrder() {
    this.navigateToConfirm(this.order);
  }

  navigateToConfirm(order: OrderDTO) {
    const queryParams = { dto: JSON.stringify(order) };
    this.router.navigate(['/order-form'], { queryParams });
  }

  reducePrice(price: number): number {
    let totalprice = 0;
    if (price > 5000) {
      totalprice = price * 0.9;
    }
    else {
      totalprice = price;
    }

    return totalprice;
  }

}
