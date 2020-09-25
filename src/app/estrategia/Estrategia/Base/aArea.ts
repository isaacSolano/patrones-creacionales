import { iArea } from './iArea';

export abstract class aArea implements iArea{
    private nombre:String;

    constructor(nombre:String){
        this.nombre = nombre;
    }

    public setNombre(nombre:String){
        this.nombre = nombre;
    }

    public getNombre():String{
        return this.nombre;
    }

    abstract calcularArea(): Number;
}