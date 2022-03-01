import { Injectable } from '@angular/core';
import { IMovieData, MovieData } from '../models/movie-data';
import { HttpClient } from '@angular/common/http';
import { catchError, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  movieData: IMovieData = new MovieData();
  movieData$: Subject<IMovieData> = new Subject();

  constructor(private http:HttpClient) { }

  getMovies(): void {
    this.http.get<IMovieData>('https://')
      .pipe(
        catchError((e) => throwError(e))
      ).subscribe((data) => {
        this.movieData = data;
        this.movieData$.next(this.movieData);
      });


  }


}
