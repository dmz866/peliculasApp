import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit
{
  buscar = '';
  peliculas: any[];

  constructor(private peliculasService: PeliculasService, private router: ActivatedRoute)
  {
    this.router.params.subscribe(parametros =>
    {
      if(parametros['texto'])
      {
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    });
  }

  ngOnInit() {
  }

  buscarPelicula()
  {
    if(this.buscar.length === 0)
    {
      return;
    }

    this.peliculasService.buscarPelicula(this.buscar).subscribe( (resp: any) =>
    {
      this.peliculas = resp.results;
      console.log(resp.results);
    });
  }
}
