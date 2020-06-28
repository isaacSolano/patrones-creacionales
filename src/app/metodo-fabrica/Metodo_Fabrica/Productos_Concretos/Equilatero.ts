import { Triangulo } from "../Producto/Triangulo";

export class Equilatero extends Triangulo{
    constructor(pLadoA:Number, pLadoB:Number, pLadoC:Number, pNombre:String){
        super(pLadoA, pLadoB, pLadoC, pNombre);
    }

    getDescripcion():String{
        return super.info();
    }
    getSuperficie():Number{
        return 0;
    }
    dibujar():String{
        return `equilatero.jpg`;
    }
}