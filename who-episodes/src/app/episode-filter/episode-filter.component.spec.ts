import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeFilterComponent } from './episode-filter.component';

describe('EpisodeFilterComponent', () => {
  let component: EpisodeFilterComponent;
  let fixture: ComponentFixture<EpisodeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
