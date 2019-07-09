import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit
{
  pelicula: any;
  regresar = '/';

  constructor(private router: ActivatedRoute, private ps: PeliculasService)
  {
    this.router.params.subscribe(parametros =>
    {
      if(parametros['id'])
      {
        this.ps.getPeliculaByID(parametros['id']).subscribe(peli =>
        {
          this.pelicula = peli;
        });
      }

      this.regresar = this.regresar + (parametros['pag']) ? parametros['pag'] : 'home';
    });
  }

  ngOnInit() {
  }

}
