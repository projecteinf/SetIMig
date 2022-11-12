import { PAL, Utils } from "../../../../Utils/pals";
import { CartaSetIMig } from "../Carta/CartaSetIMig";
import { IBarallaSetIMig } from "../../Interfaces/Baralla/IBarallaSetIMig";

export class Baralla implements IBarallaSetIMig {
    baralla:Array<CartaSetIMig> = new Array<CartaSetIMig>();

    public eliminar(carta: CartaSetIMig):void {
        this.baralla = this.baralla.filter(c => carta.num!=c.num || c.pal!=carta.pal);   
    }
    

    constructor() {
        for(let i=1;i<=12;i++) 
            for(let j=0;j<4;j++) this.baralla.push(new CartaSetIMig(i,PAL[j].pal,PAL[j].imatge));
        this.generar();
    }

    barrejar(): void {
        for (let index = 0; index < this.baralla.length; index++) this.canviar(index);
    }

    private canviar(index:number) {
        const index2=Utils.getRandom(this.baralla.length);
        this.intercanviar(index,index2);
    }

    private intercanviar(index:number,index2:number) {
        const aux=this.baralla[index];
        this.baralla[index] = this.baralla[index2];
        this.baralla[index2] = aux;
    }

    public generar(): void {
        this.baralla = this.baralla.filter(carta => carta.num!=8 && carta.num!=9);       
    }

}