import { Componente } from './Componente';

export class AccionBorrar extends Componente{
    constructor() { super() }

    accionBorrar():void{
        this.getMediador().accionBorrar();
    }
}