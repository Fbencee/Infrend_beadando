import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerRegistrationComponent } from './costumer-registration/costumer-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CostumerListComponent } from './costumer-list/costumer-list.component';
import { ToastrModule } from 'ngx-toastr';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderFormComponent } from './order-form/order-form.component';
import { OvenListComponent } from './oven-list/oven-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CostumerRegistrationComponent,
    CostumerListComponent,
    FoodListComponent,
    FoodFormComponent,
    OrderFormComponent,
    OvenListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   

 }
