import { iPersonaje } from '../Abstracto/iPersonaje';
import { iVisitor } from '../Abstracto/iVisitor';
import { Guerrero } from './Guerrero';
import { Mago } from './Mago';

export class EquiparArma implements iVisitor{
    visitarPersonajes(arrPersonajes: iPersonaje[]): void {
        arrPersonajes.forEach( (each:iPersonaje) => each.aceptar(this) );
    }

    visitarMago(mago: Mago):void{}

    visitarGuerrero(guerrero: Guerrero): void{
        if(guerrero.getNivel() > 2)
            guerrero.setEspecial("Arco y flecha");
        else
            guerrero.setEspecial("Daga");
    }
}