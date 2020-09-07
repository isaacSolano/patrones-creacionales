import { iEmpresa } from './Compositor/Base/iEmpresa'
import { Equipo } from './Compositor/Componentes/Equipo';
import { Empleado } from './Compositor/Componentes/Empleado';
import { Helper } from '../Helper';

export class Gestor{
    private arrComponentes:Array<iEmpresa>;
    private helper:Helper;

    constructor(){
        this.arrComponentes = [];
        this.helper = new Helper();
    }

    public nuevoEmpleado(nombre:String, salario:Number){
        if(this.arrComponentes.length === 0){
            this.nuevoEquipo(nombre, salario);
        }else{
            this.arrComponentes.forEach( (each, i) => {
                if( (each as Equipo).getArrComposicion().length >= 5){
                    if(i+1 === this.arrComponentes.length){
                        this.nuevoEquipo(nombre, salario);
                    }
                }else{
                    this.agregarEmpleado(each, new Empleado(salario, nombre) );
                }
            });
        }
    }

    public nuevoEquipo(nombre:String, salario:Number){
        this.arrComponentes.push( new Equipo( this.helper.getNombreEquipo() ) );

        this.agregarEmpleado( this.arrComponentes[this.arrComponentes.length-1], new Empleado(salario, nombre) );
    }

    public agregarEmpleado(equipo:iEmpresa, empleado:iEmpresa){
        equipo.agregarComponente(empleado);
    }

    public obtenerEmpleadosCreados():Array<any>{
        let arrInfoEmpleadosCreados:Array<any> = [];

        this.arrComponentes.forEach(equipo => {
            (equipo as Equipo).getArrComposicion().forEach(empleado => {
                arrInfoEmpleadosCreados.push(
                    {...equipo.toString(), ...empleado.toString()}
                );
            });
        });

        return arrInfoEmpleadosCreados;
    }
}