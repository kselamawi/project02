import { getInstructionStatements } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie, IMovieDetail } from 'src/app/interfaces/imovie';
import { ITicket } from 'src/app/interfaces/ITicket';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private movieService:MovieServiceService) { }

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

  movieName = "";

  ticket: ITicket = {
    price: 15.99,
    movieTitle: "",
    genre: "",
    releaseDate:"",
    showTimeDate:"",
    timeslot:"",
  }


  //We need to be able to populate a ticket object to send to our back end. 
  saveTickets(pageMovie:IMovieDetail){
    console.log("saveTickets function called");
    console.log(pageMovie.title);
  }

  getMovies(){

    this.movieService.getMovies()
    .subscribe((data) => {
      console.log(data);
      
      this.movieList = data;

    });

  }
  



}
