import { Mediador } from './Mediador';

export class Componente {
    protected mediador:Mediador;

    constructor(){

    }

    getMediador():Mediador{
        return this.mediador;
    }
    setMediador(mediador:Mediador){
        this.mediador = mediador;
    }
}