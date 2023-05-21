import { Component, OnInit } from '@angular/core';
import { OvenService } from '../services/oven.service';
import { Router } from '@angular/router';
import { OvenDTO } from 'models';

@Component({
  selector: 'app-oven-list',
  templateUrl: './oven-list.component.html',
  styleUrls: ['./oven-list.component.css']
})
export class OvenListComponent implements OnInit {
  ovens: OvenDTO[] = [];
  dates: string[] = [];

  constructor(
    private ovenService: OvenService,
    private router: Router) { }

  ngOnInit(): void {
    this.ovenService.getAll().subscribe({
      next: (ovens) => {
        this.ovens = ovens;
        console.log(ovens);
      },
      error: (err) => console.error(err)
    })

    this.ovens.forEach(oven => {
      let stringdate =this.dates.push(oven.finishtime.toDateString());
      console.log("this:"+stringdate);
    });

    console.log(this.dates);
  }


}
