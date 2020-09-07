import { aAgregado } from './aAgregado';
import { aIterador } from './aIterador';
import { Iterador } from './Iterador';
import { Elemento } from './Elemento';

export class Agregado implements aAgregado{
    protected arrElementos:Array<Elemento> = new Array();

    constructor(arrElementos:any){
        let indice = 0;

        for(let elemento of Object.values(arrElementos)){
            //@ts-ignore
            this.arrElementos.push( new Elemento(elemento.nombre, indice, elemento.seleccionado) );
            indice++;
        }
    }
    
    getIterador(): aIterador {
        return new Iterador(this);
    }

    obtenerTamanno():Number{
        return this.arrElementos.length;
    }

    obtenerElemento(pIndice:Number):Elemento{
        return this.arrElementos.find( ({indice}) => indice === pIndice);
    }
}