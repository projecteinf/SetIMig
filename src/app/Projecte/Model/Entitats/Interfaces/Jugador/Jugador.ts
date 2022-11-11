import { CartaSetIMig } from "../../Implementations/Carta/CartaSetIMig";

export interface IJugador {
    nom:string;
    cartes:Array<CartaSetIMig>;

    agafarCarta(carta:CartaSetIMig):void;
    contar():number;
}