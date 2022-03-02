import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie, IMovieDetail } from 'src/app/interfaces/imovie';
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
    image:""
  }



  getMovies(){

    this.movieService.getMovies()
    .subscribe((data) => {
      console.log(data);
      
      this.movieList = data;
      console.log(this.movieList);

      this.movie.title = this.movieList.items[0].title;
      this.movie.releaseState = this.movieList.items[0].releaseState;
      this.movie.image = this.movieList.items[0].image;
    });

  }
  



}
