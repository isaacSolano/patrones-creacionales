import { iColor } from '../Abstracta/IColor';

export class Rojo implements iColor{
    pintar():String{
        return `rojo`;
    }
}