import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user-update',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  @Output() changePage = new EventEmitter();

  hide:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showFirst:String = "";
  showLast:String = "";
  showEmail:String = "";
  showPassword:String = "";
  
  showHide(): void {
    this.hide = !this.hide;

  }

  updateUser(): void {
    const user = {
      f_name: this.showFirst,
      l_name: this.showLast,
      email: this.showEmail,
      password: this.showPassword
    }

    this.changePage.emit(user);

    this.showFirst = "";
    this.showLast = "";
    this.showEmail = "";
    this.showPassword = "";
  }



}
