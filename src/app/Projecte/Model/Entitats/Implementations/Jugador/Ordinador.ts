import { max } from "rxjs";
import { Utils } from "src/app/Projecte/Utils/Utils";
import { IOrdinador } from "../../Interfaces/Jugador/Ordinador";
import { Baralla } from "../Baralla/Baralla";
import { CartaSetIMig } from "../Carta/CartaSetIMig";
import { Jugador } from "./Jugador";

export class Ordinador extends Jugador implements IOrdinador {
    maxPunts: number;
    
    constructor(nom:string,maxPunts:number) {
        super(nom);
        this.maxPunts = maxPunts;
    }
    jugar(baralla: Baralla): number {
        do {
            this.agafarCarta(baralla.baralla[Utils.getRandom(baralla.baralla.length)]);
        } while (this.contar()<this.maxPunts);
        
        return this.contar();
        
    }
    
}