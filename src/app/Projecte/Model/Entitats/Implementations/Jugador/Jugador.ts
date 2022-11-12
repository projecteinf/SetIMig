import { IJugador } from "../../Interfaces/Jugador/Jugador";
import { CartaSetIMig } from "../Carta/CartaSetIMig";

export class Jugador implements IJugador {
    nom: string;
    cartes: CartaSetIMig[]=new Array<CartaSetIMig>();

    constructor(nom:string) {
        this.nom = nom;
    }

    agafarCarta(carta: CartaSetIMig): void {
        this.cartes.push(carta);
    }
    
    contar(): number {
        let total:number = 0;
        this.cartes.forEach(carta => {
            total += carta.value;
        });
        return total;
    }

    
}