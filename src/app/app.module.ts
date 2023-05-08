import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerRegistrationComponent } from './costumer-registration/costumer-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CostumerListComponent } from './costumer-list/costumer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CostumerRegistrationComponent,
    CostumerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   

 }
