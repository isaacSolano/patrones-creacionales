import { Persona } from '../Componente/Persona';

export class Peruano extends Persona{
    private tipo:String;
    private Nombre:String;
    private Velocidad:Number;
    private Accion:String;

    constructor(nombre:String, velocidad:Number, accion:String){
        super();

        this.setNombre(nombre);
        this.setVelocidad(velocidad);
        this.setAccion(accion);
        this.setTipo("Persona");
    }

    public setTipo(tipo:String){
        this.tipo = tipo;
    }
    
    public setVelocidad(velocidad:Number){
        this.Velocidad = velocidad;
    }

    public setAccion(accion:String){
        this.Accion = accion;
    }

    public setNombre(nombre:String){
        this.Nombre = nombre;
    }

    
    public getTipo():String{
        return this.tipo;
    }

    public getNombre():String{
        return this.Nombre;
    }

    public getVelocidad():Number{
        return this.Velocidad;
    }

    public getAccion():String{
        return this.Accion;
    }

    public toString():String{
        return `${this.getNombre()}, realiza la accion ${this.getAccion()} a una velocidad de ${this.getVelocidad()}km/h`;
    }
}