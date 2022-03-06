import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  onSubmit(): void {

    //set cookies...or the session to null?
    //document.cookie = 'id=;';
    //document.cookie = 'Authorization=;';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
