import { Carro } from "./Constructor/Objetos/Carro";
import { ConstructorEconomico } from "./Constructor/Constructores/ConstructorEconomico";
import { ConstructorEstandar } from "./Constructor/Constructores/ConstructorEstandar";
import { ConstructorFullExtras } from "./Constructor/Constructores/ConstructorFullExtras";

import { Director } from "./Constructor/Directores/Director";

export class Gestor{
    private objDirector:Director = new Director();
    private arrCarros:Array<Carro> = [];

    constructor(){}

    construccionEconomico(){
        this.objDirector.setBuilder( new ConstructorEconomico() );
        this.crearCarro();
    }

    construccionEstandar(){
        this.objDirector.setBuilder( new ConstructorEstandar() );
        this.crearCarro();
    }

    construccionFullExtras(){
        this.objDirector.setBuilder( new ConstructorFullExtras() );
        this.crearCarro();
    }

    crearCarro(){
        this.objDirector.construirCarro();
        this.arrCarros.push( this.objDirector.getBuilder().getCarro() );
    }

    obtenerDatos():Array<Carro>{
        return this.arrCarros;
    }


    getDirector():Director{
        return this.objDirector;
    }
    setDirector(pObjDirector:Director):void{
        this.objDirector = pObjDirector;
    }
}