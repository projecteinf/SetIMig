import { CartaSetIMig } from "../../Implementations/Carta/CartaSetIMig";
import { IJugador } from "./Jugador";


export interface IOrdinador extends IJugador {
    maxPunts:number; // Número a partir del qual deixa d'agafar cartes
}

