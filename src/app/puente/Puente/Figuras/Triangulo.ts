import { Figura_Abstracta } from '../Abstracta/Figura_Abstracta';
import { iColor } from '../Abstracta/IColor';

export class Triangulo extends Figura_Abstracta{
    constructor(color:iColor){
        super(color);
    }

    dibujar():String{
        return `Dibujando triangulo ${this.getColor() !== null ? ` de color ${this.getColor().pintar()}` : ` sin pintar`}`;
    }
}