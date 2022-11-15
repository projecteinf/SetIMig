import { CartaSetIMig } from "../Carta/CartaSetIMig";
import { IBarallaSetIMig } from "../../Interfaces/Baralla/IBarallaSetIMig";
import { BarallaBase } from "./BarallaBase";

export class Baralla extends BarallaBase implements IBarallaSetIMig {
    override baralla!:Array<CartaSetIMig>;

    //override baralla:Array<CartaSetIMig> = new Array<CartaSetIMig>();


    constructor() {
        super();
        this.generar();
        this.inicialitzar();
        console.log(this.baralla);
    }

    public inicialitzar() {
        this.baralla.forEach(carta => {
            carta.value = carta.num < 8 ? carta.num : 0.5;
        });
    }

    public generar(): void {
        this.baralla = this.baralla.filter(carta => carta.num!=8 && carta.num!=9);       
    }

}