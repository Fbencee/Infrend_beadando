import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'beadando-app';

  constructor(private router: Router) { };

  ngOnInit(): void {
    this.router.navigateByUrl('/costumer-list');
  }


  // ngOnInit(): void {
  //   if (this.isLoggedIn) {
  //     this.router.navigateByUrl('/costumer-list');
  //   } else {
  //     this.router.navigate(['/']);
  //   }
}

