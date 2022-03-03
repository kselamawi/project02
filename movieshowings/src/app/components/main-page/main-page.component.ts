import { getInstructionStatements } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie, IMovieDetail } from 'src/app/interfaces/imovie';
import { ITicket } from 'src/app/interfaces/ITicket';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { TicketServiceService } from 'src/app/services/ticket-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private movieService:MovieServiceService, private ticketService:TicketServiceService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  //Need to populate page with Movie information

  //Movie object
  movieList: IMovie = new IMovie();

  movie:IMovieDetail = {
    title:"",
    releaseState:"",
    image:"",
    genres:"",
  }


  ticketList: ITicket[] = [];

  ticketDays = [
    {id: 1, name: "Monday"},
    {id: 2, name: "Tuesday"},
    {id: 3, name: "Wednesday"},
    {id: 4, name: "Thursday"},
    {id: 5, name: "Friday"}
  ];

  ticketTimes = [
  {id: 1, name: "5:00PM"},
  {id: 2, name: "8:00PM"},
  {id: 3, name: "10:00PM"}
  ];

  ticketAmounts = [
    {id: 1, name: "1"},
    {id: 2, name: "2"},
    {id: 3, name: "3"}
    ];

  ticketTime = null;
  ticketDay = null;
  ticketAmount = null;

  ticket: ITicket = {
    id: 1,
    price: 15.99,
    movieTitle: "",
    genre: "",
    showTime:"",
    showTimeSlot:"",
    owner:{
      id: 0,
      email:"",
      password:""
    },
  }

  

  //We need to be able to populate a ticket object to send to our back end. 
  saveTickets(pageMovie:IMovieDetail, ticketDay:any, ticketTime:any, ticketAmount:any){
    console.log("saveTickets function called");
    if(!this.getCookie("id")){
      alert("Please login to save a ticket");
      window.location.href = "/login";
    }

  

    //Setting up our ticket to send back
    this.ticket.movieTitle = pageMovie.title;
    this.ticket.genre = pageMovie.genres;

    this.ticket.showTime = ticketDay.name;
    this.ticket.showTimeSlot = ticketTime.name;

    let id = this.getCookie("id");

    console.log(this.ticket);

    for (let i = 0; i < ticketAmount.id; i++){
    this.ticketService.createTickets(this.ticket, id)
      .subscribe((data) => {
        console.log(data);
      });
    }
  

  }

  getMovies(){

    this.movieService.getMovies()
    .subscribe((data) => {
      console.log(data);
      
      this.movieList = data;

    });

  }
  

  getCookie(cname:any) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

}
