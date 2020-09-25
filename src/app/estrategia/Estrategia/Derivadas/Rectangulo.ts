import { aArea } from '../Base/aArea';

export class Rectangulo extends aArea{
    private base:number;
    private altura:number;

    constructor(base:number, altura:number){
        super(`Rectangulo`);
        if(base === altura) {
            super.setNombre("Cuadrado");
        }

        this.base = base;
        this.altura = altura;
    }

    calcularArea(): Number {
        return this.base * this.altura;
    }
}