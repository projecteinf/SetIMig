import { Injectable } from '@angular/core';
import { Baralla } from '../../Entitats/Implementations/Baralla/Baralla';

@Injectable({
  providedIn: 'root'
})
export class BarallaService {
  baralla:Baralla=new Baralla();
  constructor() { }
  getBaralla() { return this.baralla; }

}
