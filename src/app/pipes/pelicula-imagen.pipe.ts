import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform
{

  transform(pelicula: any): any
  {
    let url = 'http://image.tmdb.org/t/p/w300';

    if(pelicula.backdrop_path)
    {
      url = url + pelicula.backdrop_path;
    }
    else
    {
      if(pelicula.poster_path)
      {
        url = url + pelicula.poster_path;
      }
      else
      {
        url = 'assets/images/noimage.jpg';
      }
    }

    return url;
  }
}
