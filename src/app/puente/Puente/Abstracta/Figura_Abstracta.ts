import { iColor } from './IColor';

export abstract class Figura_Abstracta{
    private color:iColor;

    constructor(color:iColor){
        this.setColor(color);
    }

    abstract dibujar():String;

    setColor(color:iColor){
        this.color = color;
    }
    getColor():iColor{
        return this.color;
    }
}