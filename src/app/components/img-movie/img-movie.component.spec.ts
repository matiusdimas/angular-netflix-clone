import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgMovieComponent } from './img-movie.component';

describe('ImgMovieComponent', () => {
  let component: ImgMovieComponent;
  let fixture: ComponentFixture<ImgMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgMovieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
