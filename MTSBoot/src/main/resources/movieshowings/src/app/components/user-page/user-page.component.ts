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
    this.getCurrentInfo();
  }
  
  ngOnChanges(): void {
    this.getCurrentInfo();
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

  getCurrentInfo(){
    if(!this.getCookie("id")){
      alert("Please login to access this page");
      window.location.href="/login";
    }
    let id = this.getCookie("id");
    this.userService.getUser(id)
    .subscribe((data => {
      this.showFirst = data.first;
      this.showLast = data.last;
      this.showEmail = data.email;
      this.showPassword = data.password;
    }));
  }

  getUserFromUpdateUser($event: any):void{
    console.log("called getUserfromUpdateUser");
    console.log($event);

    this.userInfo = $event;


    this.userService.update(this.userInfo)
    .subscribe((data) => {
      if(data == null){
        alert("Error, could not change information.");
      }
      console.log(data);
      
    })



    this.showFirst = this.userInfo.first;
    this.showLast = this.userInfo.last;
    this.showEmail = this.userInfo.email;
    this.showPassword = this.userInfo.password;
  
    

  }

  getCookie(cname:any) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

}
