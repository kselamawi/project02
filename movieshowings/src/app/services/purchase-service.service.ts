import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPurchase } from '../interfaces/ipurchase';
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

  getSavedTickets(){
    var savedTickets: IPurchase[]; 
    return savedTickets = TicketServiceService.getTickets(); //not sure if we can save ITicket[] into IPurchase[]
  }

  //Add total of all ticket prices inside purchases array
  addTotal(purchases: IPurchase[]) {
    var num: number = 0;
    var sum: number = 0;
    while(num <= purchases.length) {
      sum += purchases[num].price;
    }
    return sum;
  }

  //userID will have the tickets saved to it
  purchase(purchaseID: number, userID: number ): Observable<IPurchase> {
    return this.http.post<IPurchase>("http://localhost:8080/purchase", JSON.stringify({ userID }), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(catchError((e) => {
        return throwError(e);
      }))
  }

  constructor(private http: HttpClient) { }

  doPurchase(purchases: IPurchase[]): Observable<IPurchase> {
    return this.http.post<IPurchase>("http://localhost:8080/purchase", JSON.stringify({ purchases }), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(catchError((e) => {
        return throwError(e);
      }))
    //backend will send email using info stored in db when purchase is made
  }

}
