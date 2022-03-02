import { Time } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { PurchaseService } from 'src/app/services/purchase-service.service';
import { ITicket } from 'src/app/interfaces/ITicket';
import { IPurchase } from 'src/app/interfaces/ipurchase';

import { Router, NavigationExtras } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage-services.service'

interface IPurchaseModel extends IPurchase {
  addToPurchase: boolean;
}
@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Output() purchase = new EventEmitter();

  selectAllTicketsState: boolean = false;

  hide: boolean = true;

  showHide(): void {
    this.hide = !this.hide;
  }

   // constructor() { }
  constructor(private purchaseService: PurchaseService, private router: Router, private localStore: LocalStorageService) { }

  ngOnInit(): void {
  }

  userID: number = 0;
  userFirst: String = "";
  userLast: String = "";
  userEmail: String = "";
  userPassword: String = "";

  ticketMovieName: String = "";
  ticketPrice: Number = 0;
  ticketQuantity: Number = 0;
  ticketDateAndTime: Date = new Date(); //date and time of movie showing

  purchaseID: number = 0;
  purchaseTotalAmt: Number = 0;
  purchasedDate: Date = new Date(); //get current date

  ticketsForPurchase: IPurchaseModel[] = [];


  //transporter = nodemailer.createTransport();


  handleChecked(purchase: IPurchaseModel) {
    console.log("called handleChecked");
    console.log(purchase);
    purchase.addToPurchase = !purchase.addToPurchase;
  }

  selectAllTickets() {
    console.log("called selectAllTickets");
    this.selectAllTicketsState = !this.selectAllTicketsState;
    this.ticketsForPurchase.forEach(item => {
      item.addToPurchase = this.selectAllTicketsState;
    })
  }

  //constructor(private router: Router, private localStore: LocalStorageService) { }


  ticketInfo = {
    movieName: "",
    pricePerTicket: 0,
    numberTickets: 0,
    showingDateAndTime: new Date()
    }

  sendPurchase() {
    console.log("called sendPurchase");
    const selectedTickets = this.ticketsForPurchase.filter(item => item.addToPurchase);
    this.localStore.setItem('ticketsForPurchase', JSON.stringify(selectedTickets)); //this adds to array selectedTickets in local storage
    this.purchaseTotalAmt = this.purchaseService.addTotal(selectedTickets);
    console.log("Total: $" + this.purchaseTotalAmt);
    this.purchaseService.doPurchase(selectedTickets);

    /*
    const message = {
      from: "sender@MovieTheater.com",
      to: this.userEmail,
      subject: "Purchase Confirmation",
      text: "Thank you for your purchase! A purchase of " + this.purchaseTotalAmt + " was made on " +
        this.purchasedDate + ". Enjoy your movie!",
    }
    */
    //this.transporter.sendMail(message); //hopefully this sends email to this.userEmail


    alert("Thank you for your purchase. Enjoy your movie!")

    this.purchaseTotalAmt = 0;
    this.purchasedDate = new Date();

    this.router.navigate(["/main-page"]);

    //   const selectedTickets = this.tickets.filter(item => item.addToPurchase);
    //   const navigationExtras: NavigationExtras = {
    //     state: {
    //       selectedTickets
    //     }
    //   };
    //   this.router.navigate(["/user-page"], navigationExtras );
  }



  /* I guess I don't need this function anymore...
    onSubmit(): void {
        console.log(this.ticketInfo);

        //connect to purchaseService
        this.purchaseService.purchase(this.purchaseID, this.userID)
            .subscribe(data => {
                let movieName2 = "";
                let tPrice = 0;
                let tQuant = 0;
                let tDateandTime = "";
                let userID = 0;
                let purchaseID = 0;
                if (data.userID) {
                    userID = data.userID;
                }
                if (data.purchaseID) {
                purchaseID = data.purchaseID;
                }

                this.purchaseService.ticket = {
                    movieName: movieName2,
                    price: tPrice,
                    quantity: tQuant,
                    show_date_and_time: tDateandTime
                };
            });
    }
    */

  //get the information from when the tickets were saved to user account
  getTicketInfoFromSaveTickets() {
    console.log("called getTicketInfoFromSaveTickets");
    //console.log($event);

    //this.ticketInfo = $event;

    this.ticketsForPurchase = PurchaseService.getSavedTickets(); //add saved tickets to array of tickets for purchase

    num:number = 0;

    while(num <= ticketsForPurchase.length){
     this.ticketMovieName = ticketsForPurchase[num].movieName;
     this.ticketPrice = ticketsForPurchase[num].pricePerTicket;
     this.ticketQuantity = ticketsForPurchase[num].numberTickets;
     this.ticketDateAndTime = ticketsForPurchase[num].showingDateAndTime;
    }
  }

  /* I guess I don't need this anymore either...
  sendPurchase2(): void {

    this.purchaseService.purchase(this.purchaseID, this.userID);


    const message = {
      from: "sender@MovieTheater.com",
      to: this.userEmail,
      subject: "Purchase Confirmation",
      text: "Thank you for your purchase! A purchase of " + this.purchaseTotalAmt + " was made on " +
        this.purchasedDate + ". Enjoy your movie!",
    }

   // this.transporter.sendMail(message); //hopefully this sends email to this.userEmail


    alert("Thank you for your purchase. Enjoy your movie!")

    this.purchaseTotalAmt = 0;
    this.purchasedDate = new Date();


  }
  */


}

