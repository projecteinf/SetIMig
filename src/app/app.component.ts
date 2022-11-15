import { Component, HostListener } from '@angular/core';
import { CartaSetIMig } from './Projecte/Model/Entitats/Implementations/Carta/CartaSetIMig';
import { BarallaService } from './Projecte/Model/Services/baralla/baralla.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private barallaService:BarallaService) {}
  @HostListener("window:beforeunload",["$event"]) unloadHandler(event: Event) {
    this.generarBaralla();
  }

  generarBaralla() {
    this.barallaService.getBaralla().baralla = new Array<CartaSetIMig>();
  }
}
