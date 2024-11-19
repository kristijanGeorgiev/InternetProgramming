import { Component, Input, input } from '@angular/core';
import { Episode } from '../../models/episode';
import { EpisodeDetailsComponent } from '../episode-details/episode-details.component';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [EpisodeDetailsComponent],
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.css'
})
export class EpisodeListComponent {

  @Input({required: true})
  episodes: Episode[] = [];

  sortByRank() {
    this.episodes.sort((a, b) => a.rank - b.rank);
  }

  sortByName() {
    this.episodes.sort((a, b) => a.title.localeCompare(b.title));
  }
}
