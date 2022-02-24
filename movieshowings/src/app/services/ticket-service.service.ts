import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  ticket = {
    movie_name:"",
    price:"",
  }
  
  

  constructor(private http:HttpClient) { }



}
