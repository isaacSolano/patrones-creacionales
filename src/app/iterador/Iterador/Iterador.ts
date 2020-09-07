import { aIterador } from './aIterador';
import { Agregado } from './Agregado';

export class Iterador implements aIterador{
    private agregado:Agregado;
    private posicion:Number = 0;

    constructor(agregado:Agregado){
        this.agregado = agregado;
    }

    primero(): String {
        let informacion = null;

        if(this.agregado.obtenerTamanno() !== 0){
            this.posicion = 0;
            informacion = this.agregado.obtenerElemento(this.posicion).toString();
        }

        return informacion;
    }

    siguiente(): String {
        let informacion = null;

        if(this.agregado.obtenerTamanno() > Number(this.posicion)+1){
            this.posicion = Number(this.posicion) + 1;
            informacion = this.agregado.obtenerElemento(this.posicion).toString();
        }

        return informacion;
    }

    anterior(): String {
        let informacion = null;

        if(this.posicion > 0){
            this.posicion = Number(this.posicion) - 1;
            informacion = this.agregado.obtenerElemento(this.posicion).toString();
        }

        return informacion;
    }

    ultimo(): String {
        let informacion = null;

        if(this.agregado.obtenerTamanno() !== 0){
            this.posicion = Number(this.agregado.obtenerTamanno()) - 1;
            informacion = this.agregado.obtenerElemento(this.posicion).toString();
        }

        return informacion;
    }
}