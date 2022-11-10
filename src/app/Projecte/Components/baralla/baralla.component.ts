import { Component, OnInit } from '@angular/core';
import { BarallaSetIMig } from '../../Model/Entitats/Implementations/Baralla/BarallaSetIMig';


@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})

export class BarallaComponent implements OnInit {
  baralla!:BarallaSetIMig;

  constructor() { }

  ngOnInit(): void {
    this.baralla = new BarallaSetIMig();
    console.log(this.baralla.baralla[0].num);
  }

}
