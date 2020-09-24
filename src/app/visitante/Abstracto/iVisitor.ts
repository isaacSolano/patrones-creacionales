import { Guerrero } from '../Concreto/Guerrero';
import { Mago } from '../Concreto/Mago';
import { iPersonaje } from './iPersonaje';

export interface iVisitor{
    visitarPersonajes(arrPersonajes: Array<iPersonaje>):void;
    visitarMago(mago: Mago):void;
    visitarGuerrero(guerrero: Guerrero):void;
}