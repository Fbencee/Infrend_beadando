import { Component } from '@angular/core';
import { CostumerService } from '../services/costumer.service';
import { CostumerDTO } from 'models';


@Component({
  selector: 'app-costumer-list',
  templateUrl: './costumer-list.component.html',
  styleUrls: ['./costumer-list.component.css']
})
export class CostumerListComponent {
  costumers: CostumerDTO[] = [];

  constructor(private costumerService: CostumerService) { }

  ngOnInit(): void {
    this.costumerService.getAll().subscribe({
      next: (costumers) => {
        this.costumers = costumers;
        console.log(costumers);
      },
      error: (err) => console.error(err)
    })
  }
}
