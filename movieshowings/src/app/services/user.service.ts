import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

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

  user$: Subject<IUser> = new Subject();

  //shouldn't this and login return an observable since there's multiple values?
  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>("http://localhost:8080/users/", JSON.stringify(user), {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
    .pipe(catchError((e) => {
      return throwError(e);
    }));
  }

  //may have to change backend to allow two posts
  login(email: String, password: String): Observable<IUser> {
    return this.http.post<IUser>("http://localhost:8080/users/login", JSON.stringify({email, password}), 
    {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
    .pipe(catchError((e) => {
      return throwError(e);
    }))
  }


    getUser(id:string){
      return this.http.get<IUser>("http://localhost:8080/users/" + id + "/")
      .pipe(catchError((e) => {
        return throwError(e);
      }))
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
