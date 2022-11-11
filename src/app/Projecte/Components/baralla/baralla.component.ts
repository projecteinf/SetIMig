import { Component, OnInit } from '@angular/core';
import { Baralla } from '../../Model/Entitats/Implementations/Baralla/Baralla';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';


@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})

export class BarallaComponent implements OnInit {


  constructor(private barallaService:BarallaService) { }

  ngOnInit(): void {
    this.barallaService.getBaralla().generar();
    //console.log(this.baralla.baralla[0].num);
  }
  public getBaralla():Baralla {
    return this.barallaService.getBaralla();
  }

}
