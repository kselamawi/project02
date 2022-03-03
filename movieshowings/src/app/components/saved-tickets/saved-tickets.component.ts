import { ITicket } from 'src/app/interfaces/ITicket';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
// import { LocalStorageService} from 'src/app/services/local-storage-services.service'
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { SetAndGetTicketsService } from 'src/app/services/set-and-get-tickets.service';

// checkbox boolean interface
interface ITicketAddBool extends ITicket {
  checked: boolean;
}

@Component({
  selector: 'app-saved-tickets',
  templateUrl: './saved-tickets.component.html',
  styleUrls: ['./saved-tickets.component.css']
})
export class SavedTicketsComponent implements OnInit {

  // @Output() goToPurchasePage = new EventEmitter();

  tickets: ITicketAddBool[] = [
    // {
    // price: 8.32,
    // movieTitle: "Titanic",
    // genre: "something here",
    // releaseDate: "1/1/1999",
    // showTimeDate: "2/28/22",
    // timeslot: "8:00pm",
    // checked: false,
    // },
    // {
    //   price: 8.32,
    //   movieTitle: "Titanic",
    //   genre: "something here",
    //   releaseDate: "1/1/1999",
    //   showTimeDate: "2/28/22",
    //   timeslot: "12:00am",
    //   checked: false,
    //   }
  ];

  //setting initial select all to false
  selectAllTicketsState: boolean = false;

  constructor(private router: Router, private ts: TicketServiceService, private set: SetAndGetTicketsService) { }

  ngOnInit(): void {
    this.ts.getTickets();
    this.ts.subject.subscribe((data: ITicket[]) => {
      this.tickets = data.map(item => {
        return {...item, checked: false}
      });
    });

  }

  handleChecked(ticket: ITicketAddBool) {
    console.log(ticket);
    ticket.checked = !ticket.checked;
  }

  selectAllTickets() {
    this.selectAllTicketsState = !this.selectAllTicketsState;
    this.tickets.forEach(item => {
      item.checked = this.selectAllTicketsState;
    })
  }

  submitToPurchasePage() {
    const selectedTickets = this.tickets.filter(item => item.checked);
    // this.localStore.setItem('tickets', JSON.stringify(selectedTickets));
    this.set.setSelectedTickets(selectedTickets);

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
