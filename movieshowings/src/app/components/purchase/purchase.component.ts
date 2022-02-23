import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, ObservableInputTuple } from 'rxjs';
import { ITicket } from 'src/app/Interfaces/ITicket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  tickets:Observable<ITicket[]> = new Observable<ITicket[]>();

  hide: boolean = true;

  ticket: Iticket = {
    id: 0,
    price: "",
    movie: "",
    date: null,
    showTime:null,
    user: {
      userId: 0,
      userType:0,
      email: "",
      first: "",
      last: "",
    }
  }

  //send purchase data
  @Output() sendPurchase = new EventEmitter();

  //variables for storing user's data
  userId: Number = 0;
  userFirstName: String = ""; //want to have name ready to thank them for purchase
  userLastName: String = "";
  userEmail: String = "";

  //variables for storing ticket data
  ticketId: Number = 0;
  ticketPrice: Number = 0;
  ticketQuantity: Number = 0;


  onSubmit(): void {
    console.log("User:", this.userFirstName, this.userLastName, this.userEmail)
    console.log("Purchased Ticket(s):", this.ticketId, this.ticketPrice, this.ticketQuantity)


    const purchase = {
      purchaseId: 0,
      userId: 0,
      firstName: this.userFirstName,
      lastName: this.userLastName,
      email: this.userEmail,
      purchaseAmount: 0,
      purchaseDate: null
    }

    this.sendPurchase.emit(purchase);

    this.userId = 0;
    this.userFirstName = "";
    this.userLastName = "";
    this.userEmail = "";
  }


  //We need to tell angular that we want to use the service in our component
  //We do that with injection
  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    //We will use ngOnInit lifecycle method to grab the posts from our service, and display them
    this.ticketService.getTickets();
    this.tickets = this.ticketService.movie;
  }

}
