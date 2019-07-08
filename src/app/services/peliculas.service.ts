import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService
{
  private apiKey = '4208517fc3bbee1ef43597f5e7f87ff9';
  private urlMovieDb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopulares()
  {
    const url = `${this.urlMovieDb}/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  buscarPelicula(pelicula: string)
  {
    const url = `${this.urlMovieDb}/search/movie?callback=JSONP_CALLBACK&query=${pelicula}&sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }

  getCartelera()
  {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate() + 7}`;


    const url = `${this.urlMovieDb}/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}`;
    console.log(url);
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }
}
