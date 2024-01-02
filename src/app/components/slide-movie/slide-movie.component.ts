import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ImgMovieComponent } from "../img-movie/img-movie.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-movie',
  standalone: true,
  templateUrl: './slide-movie.component.html',
  styleUrl: './slide-movie.component.css',
  imports: [ImgMovieComponent, CommonModule]
})
export class SlideMovieComponent {
  prevBtn = true;
  nextBtn = false;
  @Input() title: string | undefined;
  @Input() item: any;
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    const atEnd = element.scrollWidth - element.scrollLeft === element.clientWidth;
    const atStart = element.scrollLeft === 0;
    this.prevBtn = atStart;
    if (atEnd) {
      const element = event.target as HTMLElement;
      const atEnd = element.scrollWidth - element.scrollLeft === element.clientWidth;
      this.nextBtn = atEnd;
    } else {
      this.nextBtn = false;
    }
  }

  @ViewChild('slider') sliderRef!: ElementRef;

  leftBtn() {
    const slider = this.sliderRef.nativeElement as HTMLElement;
    const slideWidth = slider.scrollWidth / slider.childElementCount; // Mendapatkan lebar setiap slide
    const scrollAmount = slideWidth * 3; // Menggeser sebesar 20% dari lebar setiap slide

    slider.scrollBy({
      behavior: "smooth",
      left: -scrollAmount
    });
  }

  rightBtn() {
    const slider = this.sliderRef.nativeElement as HTMLElement;
    const slideWidth = slider.scrollWidth / slider.childElementCount;
    const scrollAmount = slideWidth * 3;

    slider.scrollBy({
      behavior: "smooth",
      left: scrollAmount
    });
  }




}
