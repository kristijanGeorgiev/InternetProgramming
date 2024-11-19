import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { CommonModule } from '@angular/common';
import { EpisodeFilterComponent } from "./episode-filter/episode-filter.component";
import { EpisodeListComponent } from "./episode-list/episode-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EpisodeDetailsComponent, CommonModule, EpisodeFilterComponent, EpisodeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  data: Episode[] = [];
  title = 'Who Episodes';

  constructor(private http: HttpClient) {
  }

  async ngOnInit() {
    const url = 'https://raw.githubusercontent.com/sweko/internet-programming-a98db973kwl8xp1lz94kjf0bma5pez8c/refs/heads/main/data/doctor-who-episodes.json';
    const response = await this.http.get<{ episodes: Episode[]}>(url).toPromise();
    this.data = response!.episodes;
  }

  formatIndex(index: number) {
    return `index: #${index + 1}`;
  }
}
