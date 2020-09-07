import { Componente } from './Componente';

export class Texto extends Componente{
    private texto:String;

    constructor() { super() }

    setTexto(texto:String){
        if(texto === null){
            this.texto = "No hay acciones que imprimir";
        }else{
            this.texto = texto;
        }
    }

    getTexto():String{
        return this.texto;
    }
}