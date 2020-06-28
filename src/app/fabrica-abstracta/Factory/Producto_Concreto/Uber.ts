import { Vehiculo } from "../Producto_Abstracto/Vehiculo";

export class Uber implements Vehiculo{
    private codigo:Number;
    private tipo:String = "Uber";

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

    generarCodigo():Number{
        return Math.floor(100000 + Math.random() * 900000);
    }

    obtenerInfo():String{
        return `Se creo el vehiculo tipo: ${this.getTipo()} con el codigo: ${this.obtenerCodigo()}`;
    }
}