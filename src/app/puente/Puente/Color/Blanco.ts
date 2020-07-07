import { iColor } from '../Abstracta/IColor';

export class Blanco implements iColor{
    pintar():String{
        return `blanco`;
    }
}