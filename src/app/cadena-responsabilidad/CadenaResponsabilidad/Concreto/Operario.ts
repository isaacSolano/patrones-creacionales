import { Manejador } from '../Abstracto/Manejador';
import { Mensaje } from '../../Mensaje';

export class Operario extends Manejador {

    public ejecutarOrden(mensaje: Mensaje):String {
        if(mensaje.getDest() === "Operario"){
            return mensaje.getCont() + "\nAtte: Operario";
        }else if (this.colaborador != null) {
            return this.colaborador.ejecutarOrden(mensaje);
        }
    }
    
}