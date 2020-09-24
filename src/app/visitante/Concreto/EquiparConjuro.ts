import { iPersonaje } from '../Abstracto/iPersonaje';
import { iVisitor } from '../Abstracto/iVisitor';
import { Guerrero } from './Guerrero';
import { Mago } from './Mago';

export class EquiparConjuro implements iVisitor{

    visitarPersonajes(arrPersonajes: iPersonaje[]): void {
        arrPersonajes.forEach( (each:iPersonaje) => each.aceptar(this) );
    }

    visitarMago(mago: Mago): void {
        if(mago.getNivel() > 5)
            mago.setEspecial("Bola de fuego");
        else
            mago.setEspecial("Rayo de hielo");
    }

    visitarGuerrero(guerrero: Guerrero):void{ }
}