import { Operario } from './CadenaResponsabilidad/Concreto/Operario';
import { Supervisor } from './CadenaResponsabilidad/Concreto/Supervisor';
import { Gerente } from './CadenaResponsabilidad/Concreto/Gerente';
import { Manejador } from './CadenaResponsabilidad/Abstracto/Manejador';
import { Mensaje } from './Mensaje';

export class Gestor{
    private arrMensajes:Array<Mensaje>;
    private Manejador:Gerente;

    constructor(){
        this.arrMensajes = new Array();
    }

    private configurarCadena():Manejador{
        const LocalOperario:Operario = new Operario(),
            LocalSupervisor:Supervisor = new Supervisor(),
            LocalGerente:Gerente = new Gerente();

        LocalGerente.setColaborador(LocalSupervisor);
        LocalSupervisor.setColaborador(LocalOperario);

        return LocalGerente;
    }

    public IniciarProceso():void{
        this.Manejador = this.configurarCadena();
    }

    public ejecutarmensaje():Array<String>{
        let arrRespuestas:Array<String> = [];

        this.arrMensajes.forEach(each => {
            arrRespuestas.push( this.Manejador.ejecutarOrden(each) );
        });

        return arrRespuestas;
    }

    public agregarMensaje(dest:String, cont:String):void{
        this.arrMensajes.push( new Mensaje(dest, cont) );
    }
}