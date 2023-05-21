import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { OrderitemService } from '../services/orderitem.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodDTO, OrderDTO } from 'models';
import { FormBuilder } from '@angular/forms';

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
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.order = JSON.parse(params['dto']);
      console.log('DTO object:', this.order);
    });

    this.order.orderitems?.forEach(orderitem => {
      if (orderitem.food != null) {
        this.foods.push(orderitem.food);
      }
    });

    this.costumerName =  this.order.costumer?.firstname + " "+ this.order.costumer?.lastname;

  }

  // getTheLatestDone():Date {
  //   let id:number = 0;

  //   this.order.orderitems?.forEach( orderitem => {
  //     if(this.order.orderitems?.find(id)?.endtime < orderitem.endtime )
  //   });
  // }
}
