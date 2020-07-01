import { Vehiculo } from "../Producto_Abstracto/Vehiculo";

export class Taxi implements Vehiculo{
    private codigo:Number;
    private tipo:String = "Taxi";

    constructor(){}

    // metodos propios de la clase
    setCodigo(pCodigo:Number):void{
        this.codigo = pCodigo;
    }

    getTipo():String{
        return this.tipo;
    }

    // desarrollo de metodos implementados
    obtenerCodigo():Number{
        return this.codigo;
    }

    generarCodigo(){
        return Math.floor(100000 + Math.random() * 900000);
    }

    obtenerInfo():String{
        return `El vehiculo tipo: ${this.getTipo()}, fue creado con el codigo: ${this.obtenerCodigo()}`;
    }
}