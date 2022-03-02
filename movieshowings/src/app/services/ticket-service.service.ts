import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITicket } from '../interfaces/ITicket';
import { catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { tick } from '@angular/core/testing';



@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  subject:Subject<ITicket[]> = new Subject<ITicket[]>();

  tickets: ITicket[] = [];

  // ticket = {
  //   id: Number,
  //   movie_name:"",
  //   price:"",
  //   showtime_date: "",
  //   timeslot: "",
  // }
  
  constructor(private http:HttpClient) { }

  getTickets(): void{
    this.http.get<ITicket[]>("http://localhost:8080/tickets/")
    .pipe(
      catchError((e)=> {
        return throwError(e);
      })
      ).subscribe((data) => {
        this.tickets = data;
        this.subject.next(data);
      });
      
  }



    createTickets(ticket:ITicket): Observable<ITicket> {
      return this.http.post<ITicket>("http://localhost:8080/tickets/save/1", JSON.stringify(ticket),
       {headers : new HttpHeaders({ 'Content-Type': 'application/json' })})
      .pipe(catchError((e) => {
        return throwError(e);
      }));
       }

}
