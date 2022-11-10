
import { CartaSetIMig } from "../../Implementations/Carta/CartaSetIMig";
import { IBaralla } from "./IBaralla";

export interface IBarallaSetIMig extends IBaralla {
    baralla:Array<CartaSetIMig>;
    generar():void;
}