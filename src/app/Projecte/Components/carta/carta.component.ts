import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { CartaSetIMig } from '../../Model/Entitats/Implementations/Carta/CartaSetIMig'; 
import { BarallaService } from '../../Model/Services/baralla/baralla.service';
import { JugadorService } from '../../Model/Services/jugador/jugador.service';
@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() carta!: CartaSetIMig;
  ruta!:string;
  constructor(
    private barallaService: BarallaService,
    private jugadorService: JugadorService,
    @Inject(APP_BASE_HREF) private baseHref: string) { }

  ngOnInit(): void {
    if (this.carta!=undefined) console.log(this.carta);
    this.ruta = this.baseHref;
    console.log(`RUTA: ${this.ruta}`);
  }

  agafar(carta:CartaSetIMig) {
    if(this.jugadorService.getJugador().contar()<=7.5) {
      carta.girar(); // gira la carta!
      this.jugadorService.getJugador().agafar(carta);
      this.barallaService.getBaralla().eliminar(carta);
    }
    

  }


}
