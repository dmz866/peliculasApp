import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule   } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { appRouting } from "../app/app.routes";
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';
import { FormsModule  } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    appRouting,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
