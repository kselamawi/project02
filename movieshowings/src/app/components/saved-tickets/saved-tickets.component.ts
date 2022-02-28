import { Component, OnInit } from '@angular/core';
import { ITicket as ITicketModel } from 'src/app/interfaces/ITicket';

interface ITicket extends ITicketModel {
  addToPurchase: boolean;
}

@Component({
  selector: 'app-saved-tickets',
  templateUrl: './saved-tickets.component.html',
  styleUrls: ['./saved-tickets.component.css']
})
export class SavedTicketsComponent implements OnInit {

  // ticketsToAddToPurcahse: ITicket[] = [];

  tickets: ITicket[] = [
    {
    id: 1,
    price: 15.00,
    movieName: "Titanic",
    showTimeDate: "2/28/22",
    timeslot: "8:00pm",
    addToPurchase: false,
    }
  ];

  selectAllTicketsState: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  handleChecked(ticket: ITicket) {
    console.log(ticket);
    ticket.addToPurchase = !ticket.addToPurchase;
  }

  selectAllTickets() {
    this.selectAllTicketsState = !this.selectAllTicketsState;
    this.tickets.forEach(item => {
      item.addToPurchase = this.selectAllTicketsState;
    })
  }

}
