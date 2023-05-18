import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { OrderitemService } from '../services/orderitem.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO } from 'models';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: OrderDTO = {
    id:0,
    ordertime: new Date(),
    totalprice: 0,
    comments:'',
    costumer:null,
    orderitems:null
  }

  constructor(orderService: OrderService,
    private orderitemService: OrderitemService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.order= JSON.parse(params['dto']);
     console.log('DTO object:', this.order);
   });

  }
}
