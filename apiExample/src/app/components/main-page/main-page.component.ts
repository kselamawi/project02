import { Component, OnInit } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';
import { IMovieData, MovieData } from 'src/app/models/movie-data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  movieData: IMovieData = new MovieData();

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit(): void {
    this.movieDataService.getMovies();
    this.movieDataService.movieData$.subscribe(data => this.movieData = data);
  }


  
}
