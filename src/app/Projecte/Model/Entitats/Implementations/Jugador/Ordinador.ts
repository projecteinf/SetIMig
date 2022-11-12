import { max } from "rxjs";
import { IOrdinador } from "../../Interfaces/Jugador/Ordinador";
import { CartaSetIMig } from "../Carta/CartaSetIMig";
import { Jugador } from "./Jugador";

export class Ordinador extends Jugador implements IOrdinador {
    maxPunts: number;
    
    constructor(nom:string,maxPunts:number) {
        super(nom);
        this.maxPunts = maxPunts;
    }
}