import { Component, Input} from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieDetailsComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  @Input({required: true})
  movies: Movie[] = [];

  sortByID() {
    this.movies.sort((a, b) => a.id - b.id);
  }

  sortByTitle() {
    this.movies.sort((a, b) => a.title.localeCompare(b.title));
  }
}
