import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { FoodDTO } from 'models';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: FoodDTO[]= [];

  constructor(
    private foodService: FoodService) { }

 ngOnInit(): void {
  this.foodService.getAll().subscribe({
    next: (foods) => {
      this.foods = foods;
      console.log(foods);
    },
    error: (err) => console.error(err)  
  })
 }
}
