import { aArea } from '../Base/aArea';

export class Circulo extends aArea{
    private radio:number;

    constructor(radio:number){
        super("Circulo");
        this.radio = radio;
    }

    calcularArea(): Number {
        return Math.PI * Math.pow( (this.radio), 2);
    }
}