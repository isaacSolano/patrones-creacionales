import { Builder } from "../Constructores/Builder";

export class Director{
    private builder:Builder;
    
    constructor(){}

    construirCarro():void{
        this.builder.construirMotor();
        this.builder.construirCarroceria();
        this.builder.construirAire_Acondicionado();
        this.builder.construirEleva_Lunas();
    }
    setBuilder(pBuilder:Builder):void{
        this.builder = pBuilder;
    }
    getBuilder():Builder{
        return this.builder;
    }
}