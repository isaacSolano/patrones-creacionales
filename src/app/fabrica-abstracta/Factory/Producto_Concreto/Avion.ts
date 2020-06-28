import { Vehiculo } from "../Producto_Abstracto/Vehiculo";

export class Avion implements Vehiculo{
    private codigo:Number;
    private tipo:String = "Avion";

    constructor(){}

    setCodigo(pCodigo:Number){
        this.codigo = pCodigo;
    }

    getTipo():String{
        return this.tipo;
    }

    obtenerCodigo():Number{
        return this.codigo;
    }

    generarCodigo(){
        return Math.floor(100000 + Math.random() * 900000);
    }

    obtenerInfo():String{
        return `El vehiculo tipo: ${this.getTipo()}, con el codigo: ${this.obtenerCodigo()}`;
    }
}