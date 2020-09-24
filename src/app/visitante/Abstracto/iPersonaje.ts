import { iVisitor } from './iVisitor';

export interface iPersonaje{
    aceptar(visitor:iVisitor):void;
    toString():any;
}