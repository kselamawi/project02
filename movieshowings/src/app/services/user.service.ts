import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  newUser: IUser = {
    first: "",
    last: "",
    email: "",
    password: ""
  }

  user: IUser = {
    email: "",
    password: ""
  }

  //shouldn't this and login return an observable since there's multiple values?
  register(first: String, last: String, email: String, password: String): Observable<IUser> {
    return this.http.post<IUser>("http://localhost:4200/register", JSON.stringify({first, last, email, password}))
    .pipe(catchError((e) => {
      return throwError(e);
    }));
    /*
    .subscribe((data) => {
      console.log(data);
    })
    */
  }

  login(email: String, password: String): Observable<IUser> {
    return this.http.post<IUser>("http://localhost:4200/login", JSON.stringify({email, password}))
    .pipe(catchError((e) => {
      return throwError(e);
    }))
    /*
    .subscribe((data) => {
      console.log(data);
    })
*/
  }


    //shouldn't this and login return an observable since there's multiple values?
    update(user:IUser): Observable<IUser> {
      return this.http.put<IUser>("http://localhost:8080/users/1/update", JSON.stringify(user),
       {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
      .pipe(catchError((e) => {
        return throwError(e);
      }));
       }


  constructor(private http:HttpClient) { }
}
