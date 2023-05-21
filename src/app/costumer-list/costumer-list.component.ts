import { Component, OnInit } from '@angular/core';
import { CostumerService } from '../services/costumer.service';
import { CostumerDTO } from 'models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costumer-list',
  templateUrl: './costumer-list.component.html',
  styleUrls: ['./costumer-list.component.css']
})
export class CostumerListComponent implements OnInit {
  costumers: CostumerDTO[] = [];

  constructor(
    private costumerService: CostumerService,
    private router: Router) { }

  ngOnInit(): void {
      this.costumerService.getAll().subscribe({
        next: (costumers) => {
          this.costumers = costumers;
          console.log(costumers);
        },
        error: (err) => console.error(err)  
      })
  }

  navigateToFoods(costumer: CostumerDTO){
    const queryParams = { dto: JSON.stringify(costumer) };
    this.router.navigate(['/food-list'], { queryParams });
  }
}
