import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

    //call userservice (*make* register user service)
    //then do subscribe like fetchhh
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}