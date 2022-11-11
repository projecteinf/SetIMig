import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../Model/Services/jugadors/jugador.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  constructor(private jugadorService:JugadorService) { }

  getJugador() { return this.jugadorService.getJugador(); }

  ngOnInit(): void {
  }

}
