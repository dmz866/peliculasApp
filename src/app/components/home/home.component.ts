import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit
{
  cartelera: any;
  populares: any;
  popularesNinos: any;

  constructor(public peliculasService: PeliculasService)
  {
    this.peliculasService.getCartelera().subscribe((resp: any) =>
    {
      this.cartelera = resp.results;
    });

    this.peliculasService.getPopulares().subscribe((resp: any) =>
    {
      this.populares = resp.results;
    });

    this.peliculasService.getPopularesNinos().subscribe((resp: any) =>
    {
      this.popularesNinos = resp.results;
    });
  }

  ngOnInit() {
  }

}
