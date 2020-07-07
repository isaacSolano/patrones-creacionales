import { Decorador } from '../Decorador/Decorador';
import { Persona } from "../Componente/Persona";

export class Patineta extends Decorador{
    private velocidad:Number = 10;
    private accion:String = "patineteando";

    constructor(persona:Persona){
        super();
        this.setPersona(persona);
    }

    public getVelocidad():Number{
        return this.addition( this.velocidad, this.getPersona().getVelocidad() );
    }

    public getNombre():String{
        return `${this.getPersona().getNombre()} en patineta`;
    }

    public getAccion():String{
        return this.accion;
    }

    public toString():String{
        return `${this.getNombre()} se encuentra ${this.accion} a una velocidad total de ${this.getVelocidad()}km/h`;
    }

    public addition(n1:any, n2:any):number{
        return n1+n2;
    }
}