import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DatamovieService } from '../../services/datamovie.service';
import { SlideMovieComponent } from "../../components/slide-movie/slide-movie.component";
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, NavbarComponent, SlideMovieComponent, ButtonComponent, FooterComponent]
})
export class HomeComponent {
  movies: any;
  type: any;
  constructor(private MovieService: DatamovieService) { }
  filterMovie(type: any) {
    const filterMovie = this.movies.filter((item: any) => {
      return item.Type === type
    })
    return filterMovie
  }
  ngOnInit(): void {
    this.MovieService.getAllType().subscribe((data: any) => {
      const uniqueTypes = [...new Set(data.map((item: any) => item.Type))];
      this.type = uniqueTypes;
      this.movies = data;
    });
  }
}
