import { Component, OnInit } from '@angular/core';
import { FoodDTO } from 'models';
import { FoodService } from '../services/food.service';
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: FoodDTO[] = [];

  constructor(private foodService: FoodService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.foodService.getAll().subscribe({
      next: (foods) => {
        this.foods = foods;
        console.log(foods);
      },
      error: (err) => console.error(err)
    })
  }

  navigateToFoodForm(id : number) {
    this.router.navigate(['/food-form', id]);
  }

  deleteFood(food: FoodDTO) {
    this.foodService.delete(food.id).subscribe({
      next: () => {
        const index = this.foods.indexOf(food);
        if (index > -1) {
          this.foods.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
        this.toastrService.error('Hiba a termék törlésekor.', 'Hiba');
      }
    })
  }
}
