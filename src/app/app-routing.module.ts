import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerRegistrationComponent } from './costumer-registration/costumer-registration.component';
import { CostumerListComponent } from './costumer-list/costumer-list.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodFormComponent } from './food-form/food-form.component';

const routes: Routes = [
  { path: 'costumer-registration', component: CostumerRegistrationComponent },
  { path: 'costumer-list', component: CostumerListComponent },
  { path: 'food-list', component: FoodListComponent },
  { path: 'food-form', component: FoodFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
