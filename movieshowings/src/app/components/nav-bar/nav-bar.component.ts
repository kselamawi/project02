import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  showLogin: boolean = true;

  constructor(private router: Router, private us: UserService) { }

  ngOnInit(): void {
    this.us.user$.subscribe(user => {
      console.log("HERE", user);
      if (user) {
        this.showLogin = false;
      } else {
        this.showLogin = true;
      }
    })
  }

  showLogin: boolean = true;


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