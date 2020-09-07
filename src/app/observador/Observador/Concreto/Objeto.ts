import { iObjeto } from '../Abstract/iObjeto';
import { iObservador } from '../Abstract/iObservador';
import { Observador } from './Observador';

export class Objeto implements iObjeto{
    private estado:String;
    private observador:iObservador;

    setEstado(estado:String):String{
        this.estado = estado;
        return this.notificarObservador();
    }
    
    agregarObservador(observador:iObservador): void {
        this.observador = observador;
    }

    removerObservador(): void {
        this.observador = null;
    }

    notificarObservador(): String {
        return this.observador.actualizar(this.estado);
    }
}