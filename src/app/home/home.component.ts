import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TheMovieDbService } from '../the-movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies = [];

  constructor(private TheMovieDb: TheMovieDbService) { }

  ngOnInit() {
    this.TheMovieDb.getPopularMovies().subscribe((res) => {
      res['results'].map((movie) => this.movies.push(movie));
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
