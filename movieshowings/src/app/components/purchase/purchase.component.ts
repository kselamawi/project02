import { Time } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { PurchaseService } from 'src/app/services/purchase-service.service';

@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  hide: boolean = true;

  showHide(): void {
    this.hide = !this.hide;
  }

    constructor() { }
    constructor(private purchaseService: PurchaseService) { }

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

  //transporter = nodemailer.createTransport();

  ticketInfo = {
    movieName: "",
    pricePerTicket: 0,
    numberTickets: 0,
    showingDateAndTime: new Date()
    }



    onSubmit(): void {
        console.log(this.ticketInfo);

        //connect to purchaseService
        this.purchaseService.purchase(this.ticketMovieName, this.ticketPrice, this.ticketQuantity, this.ticketDateAndTime)
            .subscribe(data => {
                let movieName2 = "";
                let tPrice = 0;
                let tQuant = 0;
                let tDateandTime = "";
                if (data.ticketMovieName) {
                    movieName2 = data.ticketMovieName;
                }
                if (data.ticketPrice) {
                    tPrice = data.ticketPrice;
                }
                if (data.ticketQuantity) {
                    tQuant = data.ticketQuantity;
                }
                if (data.ticketDateAndTime) {
                    tDateandTime = data.ticketDateAndTime;
                }
                this.purchaseService.ticket = {
                    movieName: movieName2,
                    price: tPrice,
                    quantity: tQuant,
                    show_date_and_time: tDateandTime
                };
            });
    }

  //get the information from when the tickets were saved to user account
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
      purchaseAmount: this.purchaseTotalAmt,
      purchaseDate: this.purchasedDate
    }
    //this.purchaseService.purchase(purchase);

    
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

}

