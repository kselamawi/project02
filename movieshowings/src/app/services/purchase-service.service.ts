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

  addTotal(purchaseID: Number) {

  }

  //userID will have the tickets saved to it
  purchase(purchaseID: number, userID: number ): Observable<IPurchase> {
    return this.http.post<IPurchase>("http://localhost:8080/purchase", JSON.stringify({ userID }), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
      .pipe(catchError((e) => {
        return throwError(e);
      }))
  }

  constructor(private http: HttpClient) { }



}
