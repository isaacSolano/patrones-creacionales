import { aArea } from '../Base/aArea';

export class Poligono extends aArea{
    private radio:number;
    private lados:number;

    constructor(radio:number, lados:number){
        super(`Poligono regular de ${lados} lados`);
        this.radio = radio;
        this.lados = lados;
    }

    calcularArea(): Number {
        const numerador = this.lados * Math.pow(this.radio, 2) * Math.sin( (2 * Math.PI) / this.lados);
        return numerador / 2;
    }
}