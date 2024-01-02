import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMovieComponent } from './slide-movie.component';

describe('SlideMovieComponent', () => {
  let component: SlideMovieComponent;
  let fixture: ComponentFixture<SlideMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
