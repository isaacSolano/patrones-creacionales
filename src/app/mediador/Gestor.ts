import { AccionHola } from './Mediador/Concreto/AccionHola';
import { AccionAdios } from './Mediador/Concreto/AccionAdios';
import { AccionBorrar } from './Mediador/Concreto/AccionBorrar';
import { Texto } from './Mediador/Concreto/Texto';
import { Mediador } from './Mediador/Concreto/Mediador';

export class Gestor {
    private accHola:AccionHola = new AccionHola();
    private accAdios:AccionAdios = new AccionAdios();
    private accBorrar:AccionBorrar = new AccionBorrar();
    private texto:Texto = new Texto();

    initProcess(){
        const mediador:Mediador = new Mediador(this.accHola, this.accAdios, this.accBorrar, this.texto);
    
        this.accHola.setMediador(mediador);
        this.accAdios.setMediador(mediador);
        this.accBorrar.setMediador(mediador);
        this.texto.setMediador(mediador);
    }

    ejecutarHola():void{
        this.accHola.accionHola();
    }

    ejecutarAdios():void{
        this.accAdios.accionAdios();
    }

    ejecutarBorrar():void{
        this.accBorrar.accionBorrar();
    }

    ejecutarTexto():String{
        return this.texto.getTexto();
    }
}