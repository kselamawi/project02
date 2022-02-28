import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/IUser';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {


  hide:boolean = true;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  showFirst?:String = "";
  showLast?:String = "";
  showEmail:String = "";
  showPassword:String = "";

  ticketMovieName:String = "";
  ticketPrice:String = "";

  userInfo:IUser = {
    first:"",
    last:"",
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


    this.userService.update(this.userInfo)
    .subscribe((data) => {
      console.log(data);
      
    })



    this.showFirst = this.userInfo.first;
    this.showLast = this.userInfo.last;
    this.showEmail = this.userInfo.email;
    this.showPassword = this.userInfo.password;
  
    

  }



}
