import { iObservador } from './iObservador';

export interface iObjeto{
    agregarObservador(observador:iObservador):void;
    removerObservador():void;
    notificarObservador():String;
}