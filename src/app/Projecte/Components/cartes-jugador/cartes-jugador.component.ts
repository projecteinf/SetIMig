import { Component, Input, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../Model/Entitats/Implementations/Carta/CartaSetIMig';
import { Jugador } from '../../Model/Entitats/Implementations/Jugador/Jugador';
import { JugadorService } from '../../Model/Services/jugadors/jugador.service';

@Component({
  selector: 'app-cartes-jugador',
  templateUrl: './cartes-jugador.component.html',
  styleUrls: ['./cartes-jugador.component.css']
})
export class CartesJugadorComponent implements OnInit {
  @Input() jugador!: Jugador;

  constructor(private jugadorService:JugadorService) { }

  ngOnInit(): void {
  }

  getCartes():Array<CartaSetIMig> | undefined {
    //return this.jugadorService.getJugador().cartes;
    if (this.jugador!=undefined) return this.jugador.cartes;
    else return undefined;
  }
    
  contabilitzar():number {
    return this.jugadorService.getJugador().contar();
  }

}
