import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { first, last } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //create the user event
  @Output() sendUser = new EventEmitter();
  
  //declaring the variables
  firstName: String = "";
  lastName: String = "";
  email: String = "";
  password: String = "";
  error: boolean = false;

  onSubmit(): void {

    const user = {
      first: this.firstName,
      last: this.lastName,
      email: this.email,
      password: this.password
    }

    console.log(user);

    //connecting to userservice
    this.userService.register(user.first, user.last, user.email, user.password)
    .subscribe(data => {
      console.log(data);
    })
    
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}