import { Estado } from '../Abstracto/Estado';
import { Estandar } from '../Concreto/Estandar';

export class Alerta {
    private estado:Estado;

    constructor(){
        this.setAlerta( new Estandar() );
    }

    mostrar():String{
        return this.estado.mostrar();
    }

    setAlerta(estado:Estado){
        this.estado = estado;
    }
    getAlerta():Estado{
        return this.estado;
    }
}