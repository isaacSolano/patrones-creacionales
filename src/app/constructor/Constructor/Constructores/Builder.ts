import { Carro } from "../Objetos/Carro";

export abstract class Builder{
    protected carro:Carro = new Carro();

    getCarro():Carro{
        return this.carro;
    }
    crearCarro(){
        this.carro = new Carro();
    }

    abstract construirMotor():void;
    abstract construirCarroceria():void;
    abstract construirAire_Acondicionado():void;
    abstract construirEleva_Lunas():void;
}