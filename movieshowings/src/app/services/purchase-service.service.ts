import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPurchase } from '../interfaces/ipurchase';
import { ITicket } from '../interfaces/ITicket';
import { TicketServiceService} from '../services/ticket-service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { NgForOf } from '@angular/common';


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
    savedTickets: IPurchase[]; //not sure if we can save ITicket[] into IPurchase[]
    return savedTickets = TicketServiceService.getTickets();
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
  }

  emailConfirmation(String smtpServer, String to, String from, String subject, String body): void {
      return this.http.post<String, String, String, String>("http://localhost:8080/purchase/email")
        .pipe(catchError((e) => {
          return throwError(e);
        }))
  }

}
