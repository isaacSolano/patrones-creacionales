import { Builder } from "./Builder";

import { Motor } from "../Objetos/Motor";
import { Carroceria } from "../Objetos/Carroceria";
import { Aire_Acondicionado } from "../Objetos/Aire_Acondicionado";
import { Elevalunas_Electrico } from "../Objetos/Eleva_Lunas";

export class ConstructorEstandar extends Builder{
    private motor:Motor = new Motor("1500cc");
    private carroceria:Carroceria = new Carroceria("Metal");
    private aire_acondicionado:Aire_Acondicionado = new Aire_Acondicionado("Piston");
    private elevalunas_electrico:Elevalunas_Electrico = new Elevalunas_Electrico(true, false);

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