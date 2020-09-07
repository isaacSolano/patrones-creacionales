import { iMediador } from '../Abstract/iMediador';
import { AccionHola } from './AccionHola';
import { AccionAdios } from './AccionAdios';
import { AccionBorrar } from './AccionBorrar';
import { Texto } from './Texto';

export class Mediador implements iMediador{
    private accHola:AccionHola;
    private accAdios:AccionAdios;
    private accBorrar:AccionBorrar;
    private texto:Texto;

    constructor(accHola:AccionHola, accAdios:AccionAdios, accBorrar:AccionBorrar, texto:Texto) {
        this.accHola = accHola;
        this.accAdios = accAdios;
        this.accBorrar = accBorrar;
        this.texto = texto;
    }

    accionHola(): void {
        this.texto.setTexto("Hola");
    }

    accionAdios(): void {
        this.texto.setTexto("Adios");
    }

    accionBorrar(): void {
        this.texto.setTexto(null);
    }

    accionTexto(): String {
        return this.texto.getTexto();
    }
}