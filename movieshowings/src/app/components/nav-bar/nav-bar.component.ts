import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  navigateLogin():void{
    this.router.navigate(['login']);
  }
  navigateHome():void{
    this.router.navigate(['main-page']);
  }
  navigateAccount():void{
    this.router.navigate(['user-page']);
  }
  navigateTickets():void{
    this.router.navigate(['saved-tickets']);
  }
  navigatePurchase():void{
    this.router.navigate(['purchase']);
  }

}