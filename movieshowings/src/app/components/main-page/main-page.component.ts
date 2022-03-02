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
    price: 15.99,
    movieTitle: "",
    genre: "",
    showTimeDate:"",
    releaseDate:"",
    timeslot:"",
    owner:{
      id: 0,
      email:"",
      password:""
    },
  }

  

  //We need to be able to populate a ticket object to send to our back end. 
  saveTickets(pageMovie:IMovieDetail, ticketDay:any, ticketTime:any, ticketAmount:any){
    console.log("saveTickets function called");
    console.log(pageMovie.title);
    console.log(ticketDay);
    console.log(ticketTime);
    console.log(ticketAmount);

    //Setting up our ticket to send back
    this.ticket.movieTitle = pageMovie.title;
    this.ticket.genre = pageMovie.genres;
    this.ticket.owner.id = 1;


    this.ticketService.createTickets(this.ticket)
      .subscribe((data) => {
        console.log(data);
      })

  

  }

  getMovies(){

    this.movieService.getMovies()
    .subscribe((data) => {
      console.log(data);
      
      this.movieList = data;

    });

  }
  



}
