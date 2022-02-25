import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {


  hide:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showFirst:String = "";
  showLast:String = "";
  showEmail:String = "";
  showPassword:String = "";

  ticketMovieName:String = "";
  ticketPrice:String = "";

  userInfo = {
    f_name:"",
    l_name:"",
    email:"",
    password:""
  }
  
  showHide(): void {
    this.hide = !this.hide;
  }

  getUserFromUpdateUser($event: any):void{
    console.log("called getUserfromUpdateUser");
    console.log($event);

    this.userInfo = $event;

    this.showFirst = this.userInfo.f_name;
    this.showLast = this.userInfo.l_name;
    this.showEmail = this.userInfo.email;
    this.showPassword = this.userInfo.password;
  
    

  }




}
