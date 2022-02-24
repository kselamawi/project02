import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser = {
    email: "",
    password: ""
  }

  login(email: String, password: String): any {
    this.http.post<IUser>("http://localhost:4200/login", JSON.stringify({email, password}))
    //.pipe(catchError((e) => {
      //return new throwError(e);
    //}))
    .subscribe((data) => {
      console.log(data);
    })

  }

  constructor(private http:HttpClient) { }
}
