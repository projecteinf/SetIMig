import { PAL } from "../../../../Utils/pals";
import { CartaSetIMig } from "../Carta/CartaSetIMig";
import { IBarallaSetIMig } from "../../Interfaces/Baralla/IBarallaSetIMig";

export class Baralla implements IBarallaSetIMig {
    baralla:Array<CartaSetIMig> = new Array<CartaSetIMig>();

    constructor() {
        for(let i=1;i<=12;i++) 
            for(let j=0;j<4;j++) this.baralla.push(new CartaSetIMig(i,PAL[j].pal,PAL[j].imatge));
        this.generar();
    }

    barrejar(): void {
        throw new Error("Method not implemented.");
    }

    

    public generar(): void {
        this.baralla = this.baralla.filter(carta => carta.num!=8 && carta.num!=9);       
    }

}