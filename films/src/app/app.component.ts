import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CommonModule } from '@angular/common';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieDetailsComponent, CommonModule, MovieFilterComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed property name
})
export class AppComponent implements OnInit {
  data: Movie[] = [];
  title = 'Films';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = 'https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data6/movies.json';
    
    this.http.get<Movie[]>(url).subscribe({
      next: (movies) => {
        this.data = movies;
      },
      error: (err) => {
        console.error('Failed to fetch movies:', err);
      },
    });
  }

  formatIndex(index: number): string {
    return `index: #${index + 1}`;
  }
}
