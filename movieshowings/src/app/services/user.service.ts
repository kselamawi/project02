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
    first: "",
    last: "",
    email: "",
    password: ""
  }

  logUser: IUser = {
    email: "",
    password: ""
  }

  //shouldn't this and login return an observable since there's multiple values?
  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>("http://localhost:8080/users/", JSON.stringify(user))
    .pipe(catchError((e) => {
      return throwError(e);
    }));
  }

  //may have to change backend to allow two posts
  login(email: String, password: String): Observable<IUser> {
    return this.http.post<IUser>("http://localhost:8080/login", JSON.stringify({email, password}))
    .pipe(catchError((e) => {
      return throwError(e);
    }))
  }

  constructor(private http:HttpClient) { }
}
