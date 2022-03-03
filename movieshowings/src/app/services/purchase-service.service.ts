import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPurchase } from '../interfaces/IPurchase';
import { ITicket } from '../interfaces/ITicket';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { NgForOf } from '@angular/common';
import { TicketServiceService } from './ticket-service.service';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  ticket = {
    movieName: "",
    price: 0,
    quantity: 0,
    show_date_and_time: ""
  }

  //can have many tickets on diff dates part of purchase. But all have same purchase date and 1 total cost.
  purchaseItem = {
    purchaseID: 0,
    userID: 0
  }
  /*
  getSavedTickets(){
    var savedTickets: ITicket[] = []; 
    return savedTickets = this.get.getSelectedTickets(); //not sure if we can save ITicket[] into IPurchase[]
  }
  */
  selectedTickets: ITicket[] = [];

  

  //Add total of all ticket prices inside purchases array
  addTotal(ticket: ITicket[]) {
    var num: number = 0;
    var sum: number = 0;
    while(num <= ticket.length) {
      sum += ticket[num].price;
    }
    return sum;
  }

  //userID will have the tickets saved to it
  purchase(purchaseID: number, userID: number ): Observable<ITicket> {
    return this.http.post<ITicket>("http://localhost:8080/purchase", JSON.stringify({ userID }), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(catchError((e) => {
        return throwError(e);
      }))
  }

  constructor(private http: HttpClient) { }

  doPurchase(ticket: ITicket[]): Observable<ITicket> {
    return this.http.post<ITicket>("http://localhost:8080/purchase", JSON.stringify({ ticket }), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(catchError((e) => {
        return throwError(e);
      }))
    //backend will send email using info stored in db when purchase is made
  }

}
