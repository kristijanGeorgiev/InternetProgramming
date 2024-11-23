import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {

  @Input({required: true})
  movie: Movie = Movie.empty;

  getOscars(movie: Movie): string {
    return Object.entries(movie.oscars)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
  }
  
  getCast(movie: Movie) {
    if (!movie.cast) {
      return 'No casts';
    }
    return `${movie.cast} as ${movie.cast}`;
  }
}