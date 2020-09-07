import { iObservador } from '../Abstract/iObservador';

export class Observador implements iObservador{
    actualizar(valor: any):String{
        return `El estado ha cambiado exitosamente => '${valor}'`;
    }
}