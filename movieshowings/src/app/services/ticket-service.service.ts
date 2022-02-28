import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITicket } from '../interfaces/ITicket';
import { catchError } from 'rxjs';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

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
    this.http.get<ITicket[]>("http://localhost:4200/saved-tickets")
    .pipe(
      catchError((e)=> {
        return throwError(e);
      })
      ).subscribe((data) => {
        this.tickets = data;
      });
      
  }

}
