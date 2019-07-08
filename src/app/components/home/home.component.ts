import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public peliculasService: PeliculasService)
  {
    this.peliculasService.getCartelera().subscribe(resp =>
    {
      console.log(resp);
    });
  }

  ngOnInit() {
  }

}
