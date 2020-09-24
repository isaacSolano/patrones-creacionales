import { Helper } from '../Helper';
import { iPersonaje } from './Abstracto/iPersonaje';
import { iVisitor } from './Abstracto/iVisitor';
import { EquiparArma } from './Concreto/EquiparArma';
import { EquiparConjuro } from './Concreto/EquiparConjuro';
import { Guerrero } from './Concreto/Guerrero';
import { Mago } from './Concreto/Mago';

export class Gestor {
    arrPersonajes:Array<iPersonaje> = [];
    arrVisitantes:Array<any> = [new EquiparConjuro(), new EquiparArma()];
    helper:Helper = new Helper();

    agregarPersonaje(tipo:Number):void{
        let infoPersonaje:any;
        switch( Number(tipo) ){
            case 0:
                infoPersonaje = this.helper.getMago(2);
                this.arrPersonajes.push( new Mago(infoPersonaje.nombre, infoPersonaje.nivel, infoPersonaje.especial) );
                break;

            case 1:
                infoPersonaje = this.helper.getGuerrero(2);
                this.arrPersonajes.push( new Guerrero(infoPersonaje.nombre, infoPersonaje.nivel, infoPersonaje.especial) );
                break;

            default:
                // code block
                break;
        }
    }

    obtenerPersonajes():Array<any>{
        let arrPersonajesString:Array<any> = [];
        
        this.arrPersonajes.forEach(each => {
            arrPersonajesString.push( each.toString() );
        });

        return arrPersonajesString;
    }

    equiparPersonaje():void{
        this.visitarPersonajes();
    }

    visitarPersonajes():void{
        this.arrVisitantes.forEach( (each:iVisitor) => each.visitarPersonajes(this.arrPersonajes) );
    }
}