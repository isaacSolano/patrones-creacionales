import { Motor } from "./Motor";
import { Carroceria } from "./Carroceria";
import { Aire_Acondicionado } from "./Aire_Acondicionado";
import { Elevalunas_Electrico } from "./Eleva_Lunas";

export class Carro{
    private motor:Motor;
    private carroceria:Carroceria;
    private elevalunas_electrico:Elevalunas_Electrico;
    private aire_acondicionado:Aire_Acondicionado;

    constructor(){
        this.motor = null;
        this.carroceria = null;
        this.elevalunas_electrico = null;
        this.aire_acondicionado = null;
    }

    getMotor():Motor{
        return this.motor;
    }
    getCarroceria():Carroceria{
        return this.carroceria;
    }
    getElevalunas_Electrico():Elevalunas_Electrico{
        return this.elevalunas_electrico;
    }
    getAire_Acondicionado():Aire_Acondicionado{
        return this.aire_acondicionado;
    }

    setMotor(pMotor:Motor){
        this.motor = pMotor;
    }
    setCarroceria(pCarroceria:Carroceria){
        this.carroceria = pCarroceria;
    }
    setElevalunas_Electrico(pElevalunas_Electrico:Elevalunas_Electrico){
        this.elevalunas_electrico = pElevalunas_Electrico;
    }
    setAire_Acondicionado(pAire_Acondicionado:Aire_Acondicionado){
        this.aire_acondicionado = pAire_Acondicionado;
    }

    getInfo():String{
        return `Se creo un carro de ${ this.motor.getCilindraje() }, ademas su carroceria es de "${ this.carroceria.getMaterial() }", ${this.getAire_Acondicionado() === null ? `no cuenta con aire acondicionado` : `cuenta con aire acondicionado con sistema de "${ this.getAire_Acondicionado().getCondensador() }"` }, ${this.getElevalunas_Electrico().getVentanas_Delanteras() === true ? `cuenta con elevalunas en las ventanas delanteras` : `no cuenta con elevalunas en las ventanas delanteras`}, ${this.getElevalunas_Electrico().getVentanas_Traseras() === true ? `cuenta con elevalunas en las ventanas traseras` : `no cuenta con elevalunas en las ventanas traseras`}`;
    }
}