import { aArea } from '../Base/aArea';

export class Triangulo extends aArea{
    private base:number;
    private altura:number;

    constructor(base:number, altura:number){
        super(`Triangulo`);
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): Number {
        return (this.base * this.altura) / 2;
    }
}