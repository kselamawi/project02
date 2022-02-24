import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String = "";
  password: String = "";
  error: boolean = false;

  onSubmit(): void {
    console.log(this.email);
    console.log(this.password);

    //still need to make a user service?
    this.userService.login(this.email, this.password);

    /*.subscribe(data => {
      let mail = "";
      if(data.email) {
        mail = data.email;
      }
*/
   // })

  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
