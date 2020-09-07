import { Componente } from './Componente';

export class AccionHola extends Componente{
    constructor() { super() }

    accionHola():void{
        this.getMediador().accionHola();
    }
}