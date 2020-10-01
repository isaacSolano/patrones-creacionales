import { Estado } from './Estado/Abstracto/Estado';
import { Emergencia } from './Estado/Concreto/Emergencia';
import { Estandar } from './Estado/Concreto/Estandar';
import { Precaucion } from './Estado/Concreto/Precaucion';
import { Alerta } from './Estado/Objeto/Alerta';

export class Gestor {
    private alerta:Alerta;

    constructor(){
        this.alerta = new Alerta();
    }

    public cambiar_estado(tipo:Number):String{
        let estado:Estado;

        switch(tipo){
            case 0: 
                estado = new Estandar();
                break;
                
            case 1:
                estado = new Precaucion();
                break;
            
            case 2: 
                estado = new Emergencia();
                break;
        }

        this.alerta.setAlerta(estado);

        return this.mostrar_estado();
    }

    private mostrar_estado():String{
        return this.alerta.mostrar();
    }
}