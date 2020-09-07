import { Componente } from './Componente';

export class AccionAdios extends Componente{
    constructor() { super() }

    accionAdios():void{
        this.getMediador().accionAdios();
    }
}