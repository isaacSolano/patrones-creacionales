import { Contexto } from './Contexto';

export interface Expresion{
    interpretar(contexto:Contexto):void;
}