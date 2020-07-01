import { Maquina_Cafe } from "./Maquina_Cafe";
import { Receta } from '../Objetos/Receta';

export class Fachada{
    private maquinaCafe:Maquina_Cafe;
    private receta:Receta;

    constructor(){
        this.maquinaCafe = new Maquina_Cafe();
        this.receta = new Receta();
    }

    procesarOpcion(tipo:Number):String{
        switch(tipo){
            case 1:
                this.receta.CafeNegro();
                break;

            case 2:
                this.receta.CafeConLeche();
                break;

            case 3:
                this.receta.CafeEspresso();
                break;

            case 4:
                this.receta.CafeCapuccino();
                break;

            default:
            // code block
                break;
        }

        return this.hacerCafe(this.receta.getCant_cafe(), this.receta.getCant_agua(), this.receta.getCant_leche(), this.receta.getNombre());
    }

    hacerCafe(cant_cafe:Number, cant_agua:Number, cant_leche:Number, nombre:String):String{
        let bLeche:boolean = cant_leche > 0,
            mensaje:String = "";
        
        if(this.maquinaCafe.revisarCantVasos(0) && this.maquinaCafe.revisarNivelAgua(0, cant_agua) && this.maquinaCafe.revisarCantCafe(cant_cafe) && this.maquinaCafe.revisarCantLeche(cant_leche)){
            mensaje = `${this.maquinaCafe.colocarCafe(cant_cafe)}, ${this.maquinaCafe.colocarVaso(0)}, ${this.maquinaCafe.calentarAgua()}, ${bLeche ? `${this.maquinaCafe.vertirLeche(cant_leche)},` : ""} ${this.maquinaCafe.vertirAgua(cant_agua)}, ${this.maquinaCafe.servirCafe()}: ${nombre.toLowerCase()}`;
        }

        return mensaje;
    }
}