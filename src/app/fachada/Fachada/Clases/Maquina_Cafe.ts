import { Vaso } from "../Objetos/Vaso";
import Cafe from '../Objetos/Cafe';

export class Maquina_Cafe{
    private cant_agua:Number;
    private cant_leche:Number;
    private arrVasos:Array<Vaso>;
    private cafe:Cafe;
    
    constructor(){
        this.setCant_agua(100);
        this.setCant_leche(100);
        this.setVasos();
        this.setCafe( new Cafe("Leyenda", "Poas", 1, 50) );
    }

    revisarNivelAgua(iVaso:Number, iAgua:Number):boolean{
        let cant_agua:Number = this.getVasoEspecifico(iVaso).getCapacidad();

        return this.getCant_agua() >= cant_agua && cant_agua >= iAgua;
    }

    revisarCantCafe(cant_cafe:Number){
        if(this.getCafe().getCant_cafe() >= cant_cafe){
            this.cafe.setCant_cafe( this.cafe.getCant_cafe() - 1);

            return true;
        }else{
            return false;
        }
    }

    revisarCantLeche(cant_leche:Number){
        return this.getCant_leche() >= cant_leche;
    }

    revisarCantVasos(idVaso:Number){
        return this.getVasoEspecifico(idVaso).getCantidad() >= 1;
    }

    colocarCafe(iCafe:any):String{
        this.cafe.setCant_cafe(this.cafe.getCant_cafe() - iCafe );

        return `Se colocaron ${iCafe} cucharas de cafe`;
    }

    colocarVaso(idVaso:any):String{
        let vaso:Vaso = this.getVasoEspecifico(idVaso);
        vaso.setCantidad(vaso.getCantidad() - idVaso);

        return "el vaso esta en su lugar";
    }

    calentarAgua():String{
        return "el agua se esta calentando";
    }

    calentarLeche():String{
        return "la leche se esta calentando";
    }

    vertirAgua(iAgua:any):String{
        this.setCant_agua(this.getCant_agua() - iAgua);

        return "el agua caliente esta siendo vertida";
    }

    vertirLeche(iLeche:any):String{
        this.setCant_leche(this.getCant_leche() - iLeche);

        return "la leche caliente esta siendo vertida";
    }

    servirCafe():String{
        return "el vaso ya esta listo con";
    }


    getVasoEspecifico(numero_vaso:any):Vaso{
        return this.arrVasos[numero_vaso];
    }


    setCant_agua(cantidad:Number):void{
        this.cant_agua = cantidad;
    }
    setCant_leche(cantidad:Number):void{
        this.cant_leche = cantidad;
    }
    setVasos():void{
        this.arrVasos = [];
        
        this.arrVasos.push(new Vaso(1,15, 10,) );
        this.arrVasos.push(new Vaso(2, 20, 10,) );
        this.arrVasos.push(new Vaso(3, 30, 10,) );
    }
    setCafe(cafe:Cafe):void{
        this.cafe = cafe;
    }

    getCant_agua():any{
        return this.cant_agua;
    }
    getCant_leche():any{
        return this.cant_leche;
    }
    getCafe():Cafe{
        return this.cafe;
    }
}