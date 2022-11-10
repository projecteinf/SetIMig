import { Component, OnInit } from '@angular/core';
import { Baralla } from '../../Model/Entitats/Implementations/Baralla/Baralla';


@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})

export class BarallaComponent implements OnInit {
  baralla!:Baralla;

  constructor() { }

  ngOnInit(): void {
    this.baralla = new Baralla();
    console.log(this.baralla.baralla[0].num);
  }

}
