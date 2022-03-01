import { ITicket as ITicketModel } from 'src/app/interfaces/ITicket';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// import { LocalStorageService} from 'src/app/services/local-storage-services.service'
import { TicketServiceService } from 'src/app/services/ticket-service.service';

// checkbox boolean interface
interface ITicket extends ITicketModel {
  addToPurchase: boolean;
}

@Component({
  selector: 'app-saved-tickets',
  templateUrl: './saved-tickets.component.html',
  styleUrls: ['./saved-tickets.component.css']
})
export class SavedTicketsComponent implements OnInit {

  // @Output() goToPurchasePage = new EventEmitter();

  tickets: ITicket[] = [
    {
    price: 15.32,
    movieTitle: "Titanic",
    genre: "something here",
    releaseDate: "1/1/1999",
    showTimeDate: "2/28/22",
    timeslot: "8:00pm",
    addToPurchase: false,
    },
    {
      price: 50.32,
      movieTitle: "Titanic",
      genre: "something here",
      releaseDate: "1/1/1999",
      showTimeDate: "2/28/22",
      timeslot: "12:00pm",
      addToPurchase: false,
      }
  ];

  //setting initial select all to false
  selectAllTicketsState: boolean = false;

  constructor(private router: Router, private ts: TicketServiceService ) { }

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

  submitToPurchasePage() {
    const selectedTickets = this.tickets.filter(item => item.addToPurchase);
    // this.localStore.setItem('tickets', JSON.stringify(selectedTickets));
    this.router.navigate(["/purchase"]);

  //   const selectedTickets = this.tickets.filter(item => item.addToPurchase);
  //   const navigationExtras: NavigationExtras = {
  //     state: {
  //       selectedTickets 
  //     }
  //   };
  //   this.router.navigate(["/user-page"], navigationExtras );
  }

}
