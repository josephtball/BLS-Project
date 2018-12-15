import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDbService {

  private popular: string;

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get('http://localhost:3000/api/popular/movies');
  }

}
