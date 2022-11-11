import { Component, Input, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../Model/Entitats/Implementations/Carta/CartaSetIMig';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';
import { JugadorService } from '../../Model/Services/jugadors/jugador.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  constructor(private jugadorService:JugadorService,private barallaService:BarallaService) { }
  @Input() carta!: CartaSetIMig;
  
  ngOnInit(): void {

  }

  agafar(carta:CartaSetIMig) {
    carta.girar();
    this.jugadorService.getJugador().agafarCarta(carta);
    this.barallaService.getBaralla().eliminar(carta);
  }

}
