import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatamovieService {
  private apiKey = 'aa5b2c3'
  private apiMovie = `http://www.omdbapi.com/?apikey=${this.apiKey}&`;
  constructor(private http: HttpClient) { }

  getMovie() {
    return this.http.get(`${this.apiMovie}s=man&type=movie`)
  }
  getSeries() {
    return this.http.get(`${this.apiMovie}s=sam&type=series`)
  }

  getAllType() {
    return forkJoin({
      movies: this.getMovie(),
      series: this.getSeries(),
    }).pipe(
      map((result: any) => {
        const allTypes = {
          movies: result.movies?.Search || [],
          series: result.series?.Search || [],
        };
        const mergedArray = allTypes.movies.concat(allTypes.series);
        return mergedArray;
      })
    );
  }
}
