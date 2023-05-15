import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FoodService } from '../services/food.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FoodDTO } from 'models';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent {
  isNewFood = true;

  foods: FoodDTO[] = [];

  foodForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    name: this.formBuilder.control(''),
    desc: this.formBuilder.control(''),
    preptime: this.formBuilder.control(0),
    price: this.formBuilder.control(0)
  });
  
  constructor(
    private formBuilder: FormBuilder,
    private foodService: FoodService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewFood = false;

      this.foodService.getOne(id).subscribe({
        next: (food) => this.foodForm.setValue(food),
        error: (err) => {
          console.error(err);
          this.toastrService.error('A termékadatok betöltése sikertelen', 'Hiba');
        }
      });
    }

    this.foodService.getAll().subscribe({
      next: (foods) => this.foods = foods,
      error: (err) => {
        console.error(err);
        this.toastrService.error('A felhasználók betöltése sikertelen', 'Hiba');
      }
    })
  }



    saveFood() {
      const food = this.foodForm.value as FoodDTO;
  
      this.foodService.create(food).subscribe({
        next: (food) => {
          this.toastrService.success('A vásárló sikeresen hozzáadva, id:' + food.id, 'Siker');
        },
        error: (err) => {
          this.toastrService.error('A vásárló hozzáadása nem sikerült.', 'Hiba');
        }
      });
    }
}
