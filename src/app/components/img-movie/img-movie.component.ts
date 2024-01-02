import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-movie.component.html',
  styleUrl: './img-movie.component.css'
})
export class ImgMovieComponent {
  @Input() poster: any;
  @Input() width: any;
  @Input() height: any;
  @Input() maxHeight: any;
}
