import { Objeto } from './Observador/Concreto/Objeto';
import { Observador } from './Observador/Concreto/Observador';

export class Gestor{
    private objeto:Objeto;
        
    nuevoObjecto():void{
        this.objeto = new Objeto();
    }

    nuevoObservador():void{
        this.objeto.agregarObservador( new Observador() );
    }

    nuevoEstado(estado:String):String{
        return this.objeto.setEstado(estado);
    }
}