import { Baralla } from "../../Implementations/Baralla/Baralla";
import { CartaSetIMig } from "../../Implementations/Carta/CartaSetIMig";

export interface IBarallaSetIMig extends Baralla {
    baralla:Array<CartaSetIMig>;
    generar():void;
}