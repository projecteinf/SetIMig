import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarallaComponent } from './Projecte/Components/baralla/baralla.component';
import { CartaComponent } from './Projecte/Components/carta/carta.component';
import { JugadorComponent } from './Projecte/Components/jugador/jugador.component';
import { CartesJugadorComponent } from './Projecte/Components/cartes-jugador/cartes-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    BarallaComponent,
    CartaComponent,
    JugadorComponent,
    CartesJugadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
