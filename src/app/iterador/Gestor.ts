import { Iterador } from './Iterador/Iterador';
import { Agregado } from './Iterador/Agregado';

export class Gestor{
    agregado:Agregado;
    iterador:Iterador;

    inicializar(arrElementos:any):void{
        this.agregado = new Agregado(arrElementos);
        //@ts-ignore
        this.iterador = this.agregado.getIterador();
    }

    primero():String{
        return this.iterador.primero();
    }

    siguiente():String{
        return this.iterador.siguiente();
    }

    anterior():String{
        return this.iterador.anterior();
    }

    ultimo():String{
        return this.iterador.ultimo();
    }
}