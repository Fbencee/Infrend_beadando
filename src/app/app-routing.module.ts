import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostumerRegistrationComponent } from './costumer-registration/costumer-registration.component';
import { CostumerListComponent } from './costumer-list/costumer-list.component';

const routes: Routes = [
  { path: 'costumer-registration', component: CostumerRegistrationComponent },
  { path: 'costumer-list', component: CostumerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
