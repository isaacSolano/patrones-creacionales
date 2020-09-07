import { Manejador } from '../Abstracto/Manejador';
import { Mensaje } from '../../Mensaje';

export class Gerente extends Manejador {

    public ejecutarOrden(mensaje:Mensaje):String {
        if( mensaje.getDest() === "Gerente" ){
            return mensaje.getCont() + "\nAtte: Gerente";
        }else if(this.colaborador != null){
            return this.colaborador.ejecutarOrden(mensaje);
        }
    }
}