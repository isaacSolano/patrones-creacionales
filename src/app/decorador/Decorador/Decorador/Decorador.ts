import { Persona } from '../Componente/Persona';

export abstract class Decorador extends Persona{
    protected persona:Persona;
    private tipo:String;

    public setPersona(persona:Persona){
        this.persona = persona;
    }
    public getPersona():Persona{
        return this.persona;
    }

    public setTipo(tipo:String){
        this.tipo = tipo;
    }
    public getTipo():String{
        return this.tipo;
    }
}