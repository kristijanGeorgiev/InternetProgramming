import { Component, Input } from '@angular/core';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-episode-details',
  standalone: true,
  imports: [],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.css'
})
export class EpisodeDetailsComponent {

  @Input({required: true})
  episode: Episode = Episode.empty;

  getFullYear(broadcastDate: string ) {
    return new Date(broadcastDate).getFullYear();
  }

  getDoctor(episode: Episode) {
    return `${episode.doctor.actor} as ${episode.doctor.incarnation}`;
  }

  getCompanion(episode: Episode) {
    if (!episode.companion) {
      return 'No companion';
    }
    return `${episode.companion.actor} as ${episode.companion.character}`;
  }
}
