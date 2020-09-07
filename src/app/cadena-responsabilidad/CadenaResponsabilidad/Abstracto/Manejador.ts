import { Mensaje } from '../../Mensaje';

export abstract class Manejador{
    protected colaborador:Manejador;

    setColaborador(colaborador:Manejador){
        this.colaborador = colaborador;
    }

    public abstract ejecutarOrden(mensaje:Mensaje):String;
}