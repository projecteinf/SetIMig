import { Component, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../Model/Entitats/Implementations/Carta/CartaSetIMig';
import { JugadorService } from '../../Model/Services/jugadors/jugador.service';

@Component({
  selector: 'app-cartes-jugador',
  templateUrl: './cartes-jugador.component.html',
  styleUrls: ['./cartes-jugador.component.css']
})
export class CartesJugadorComponent implements OnInit {

  constructor(private jugadorService:JugadorService) { }

  ngOnInit(): void {
  }

  getCartes():Array<CartaSetIMig> {
    return this.jugadorService.getJugador().cartes;
  }
    


}
