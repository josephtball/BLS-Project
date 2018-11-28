import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDbService {
  TMDb_KEY = 'api_key=6ac23abc8d5623a742214ffc539337c5';
  TMDb_URL = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get(this.TMDb_URL + 'movie/popular?' + this.TMDb_KEY);
  }

}
