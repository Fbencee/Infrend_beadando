import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CostumerService } from '../services/costumer.service';
import { CostumerDTO, OrderDTO } from 'models';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-costumer-registration',
  templateUrl: './costumer-registration.component.html',
  styleUrls: ['./costumer-registration.component.css']
})
export class CostumerRegistrationComponent implements OnInit{
 
  isNewCostumer = true;

  costumerForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    firstname: this.formBuilder.control(''),
    lastname: this.formBuilder.control(''),
    email: this.formBuilder.control(''),
    address: this.formBuilder.control(''),
    phonenumber: this.formBuilder.control(''),
    orders: this.formBuilder.control<null | OrderDTO[]>(null)
  });

  constructor(
    private formBuilder: FormBuilder,
    private costumerService: CostumerService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewCostumer = false;

      this.costumerService.getOne(id).subscribe({
        next: (costumer) => this.costumerForm.setValue(costumer),
        error: (err) => {
          console.error(err);
          this.toastrService.error('A termékadatok betöltése sikertelen', 'Hiba');
        }
      });
    }
  }



    saveCostumer() {
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
