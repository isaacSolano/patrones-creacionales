import { Manejador } from '../Abstracto/Manejador';
import { Mensaje } from '../../Mensaje';

export class Supervisor extends Manejador{
    public ejecutarOrden(mensaje: Mensaje):String {
        if(mensaje.getDest() === "Supervisor"){
            return mensaje.getCont() + "\nAtte: Supervisor";
        }else if (this.colaborador != null){
            return this.colaborador.ejecutarOrden(mensaje);
        }
    }
    
}