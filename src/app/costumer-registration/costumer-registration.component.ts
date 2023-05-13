import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CostumerService } from '../services/costumer.service';
import { CostumerDTO } from 'models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-costumer-registration',
  templateUrl: './costumer-registration.component.html',
  styleUrls: ['./costumer-registration.component.css']
})
export class CostumerRegistrationComponent {
 
  costumerForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control(''),
    description: this.formBuilder.control(''),
    price: this.formBuilder.control(0),
    imgUrl: this.formBuilder.control(''),
    brand: this.formBuilder.control('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private costumerService: CostumerService,
    private toastrService: ToastrService) { }

    saveProduct() {
      const costumer = this.costumerForm.value as CostumerDTO;
  
      this.costumerService.create(costumer).subscribe({
        next: (costumer) => {
          this.toastrService.success('A vásárló sikeresen hozzáadva, id:' + costumer.id, 'Siker');
        },
        error: (err) => {
          this.toastrService.error('A vásárló hozzáadása nem sikerült.', 'Hiba');
        }
      });
    }
}
