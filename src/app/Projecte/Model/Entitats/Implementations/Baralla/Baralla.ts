import { PAL } from "../../../../Utils/pals";
import { CartaSetIMig } from "../Carta/CartaSetIMig";

export class Baralla {
    baralla:Array<CartaSetIMig> = new Array<CartaSetIMig>();

    constructor() {
        for(let i=1;i<=12;i++) 
            for(let j=0;j<4;j++) this.baralla.push(new CartaSetIMig(i,PAL[j].pal,PAL[j].imatge));
    }
}