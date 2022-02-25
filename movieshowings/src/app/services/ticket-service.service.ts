import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  ticket = {
    movie_name:"",
    price: 0,
    show_date_and_time: new Date(),
  }
  
  

  constructor(private http:HttpClient) { }



}
