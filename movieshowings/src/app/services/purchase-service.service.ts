import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPurchase } from '../interfaces/IPurchase';
import { ITicket } from '../interfaces/ITicket';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


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






  doPurchase(purchase: IPurchase): Observable<IPurchase> {
    console.log("hello");
    return this.http.get<IPurchase>("http://localhost:8080/purchase/" ) 
      .pipe(catchError((e) => {
        return throwError(e);
      }));
    //backend will send email using info stored in db when purchase is made
  }


  constructor(private http: HttpClient) { }
}
