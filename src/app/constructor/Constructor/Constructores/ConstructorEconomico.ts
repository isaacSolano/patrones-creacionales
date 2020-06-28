import { Motor } from "../Objetos/Motor";
import { Carroceria } from "../Objetos/Carroceria";
import { Aire_Acondicionado } from "../Objetos/Aire_Acondicionado";
import { Elevalunas_Electrico } from "../Objetos/Eleva_Lunas";

import { Builder } from "./Builder";

export class ConstructorEconomico extends Builder{
    private motor:Motor = new Motor("1100cc");
    private carroceria:Carroceria = new Carroceria("Plastico");
    private aire_acondicionado:Aire_Acondicionado = null;
    private elevalunas_electrico:Elevalunas_Electrico = new Elevalunas_Electrico(false, false);

    constructor(){
        super();
    }

    construirMotor():void{
        this.carro.setMotor(this.motor);
    }
    construirCarroceria():void{
        this.carro.setCarroceria(this.carroceria);
    }
    construirAire_Acondicionado():void{
        this.carro.setAire_Acondicionado(this.aire_acondicionado);
    }
    construirEleva_Lunas():void{
        this.carro.setElevalunas_Electrico(this.elevalunas_electrico);
    }
}