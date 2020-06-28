export abstract class Triangulo{
    private ladoA:Number;
    private ladoB:Number;
    private ladoC:Number;
    private nombre:String;

    constructor(pLadoA:Number, pLadoB:Number, pLadoC:Number, pNombre:String){
        this.setLadoA(pLadoA);
        this.setLadoB(pLadoB);
        this.setLadoC(pLadoC);
        this.setNombre(pNombre);
    }

    setLadoA(pLado:Number){
        this.ladoA = pLado;
    }
    setLadoB(pLado:Number){
        this.ladoB = pLado;
    }
    setLadoC(pLado:Number){
        this.ladoC = pLado;
    }
    setNombre(pNombre:String){
        this.nombre = pNombre;
    }

    getLadoA():Number{
        return this.ladoA;
    }
    getLadoB():Number{
        return this.ladoB;
    }
    getLadoC():Number{
        return this.ladoC;
    }
    getNombre():String{
        return this.nombre;
    }

    info():String{
        return `El triangulo ${this.getNombre()}, tiene las medidas de sus lados: ${this.getLadoA()}, ${this.getLadoB()}, ${this.getLadoC()}`;
    }

    abstract getDescripcion():String;
    abstract getSuperficie():Number;
    abstract dibujar():String;
}