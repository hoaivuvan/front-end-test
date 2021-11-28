import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end-test';
  constructor(protected router: Router){
    // var token = localStorage.getItem("AuthenticateToken");
    // if (token != null && token != undefined && token.length > 0){
    //   this.router.navigateByUrl('/map')
    // } 
    // else {
    //   this.router.navigateByUrl('/sign-in')
    // }
    this.router.navigateByUrl('/sign-in')
  }
}
