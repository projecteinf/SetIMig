import { Component, OnInit } from '@angular/core';
import { Ordinador } from '../../Model/Entitats/Implementations/Jugador/Ordinador';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';
import { JugadorService } from '../../Model/Services/jugadors/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  jugador?:Ordinador;

  constructor(private jugadorService:JugadorService,private barallaService:BarallaService) { }

  getJugador() { return this.jugadorService.getJugador(); }

  ngOnInit(): void {
  }

  plantar() {
    this.jugador = new Ordinador("Ordinador",6);
    this.jugador.jugar(this.barallaService.getBaralla());

  }
}
