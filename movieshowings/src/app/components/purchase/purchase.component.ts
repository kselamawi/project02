import { Time } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Output() makePurchase = new EventEmitter();

  hide: boolean = true;

  showHide(): void {
    this.hide = !this.hide;
  }

  constructor() { }

  ngOnInit(): void {
  }

  userFirst: String = "";
  userLast: String = "";
  userEmail: String = "";
  userPassword: String = "";

  ticketMovieName: String = "";
  ticketPrice: Number = 0;
  ticketQuantity: Number = 0;
  ticketDateAndTime: Date = new Date(); //date and time of movie showing

  purchaseTotalAmt: Number = 0;
  purchasedDate: Date = new Date(); //get current date

  showHide(): void {
    this.hide = !this.hide;
  }

  ticketInfo = {
    movieName: "",
    pricePerTicket: 0,
    numberTickets: 0,
    showingDateAndTime: new Date()
  }

  getTicketInfoFromSaveTickets($event: any): void{
    console.log("called getTicketInfoFromSaveTickets");
    console.log($event);

    this.ticketInfo = $event;

    this.ticketMovieName = this.ticketInfo.movieName;
    this.ticketPrice = this.ticketInfo.pricePerTicket;
    this.ticketQuantity = this.ticketInfo.numberTickets;
    this.ticketDateAndTime = this.ticketInfo.showingDateAndTime;
  }

  updatePurchase(): void {
    const purchase = {
      purchaseAmount: this.purchaseTotalAmt;
      purchaseDate: this.purchasedDate;
    }
  }

  this.makePurchase.emit(purchase);

  this.purchaseTotalAmt = 0;
  this.purchasedDate = new Date();

}

