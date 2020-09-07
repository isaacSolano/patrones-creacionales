import { SuperTarea } from './Comando/Concreto/SuperTarea';
import { tValidar } from './Comando/Concreto/tValidar';
import { tEnviarCorreo } from './Comando/Concreto/tEnviarCorreo';
import { tImprimir } from './Comando/Concreto/tImprimir';
import { Producto } from './Comando/Producto';

export class Gestor{
    private superTarea:SuperTarea
    private arrEstado:Array<String>;

    iniciar():void{
        this.superTarea = new SuperTarea();
        this.arrEstado = new Array();

        this.superTarea.addTarea( new tImprimir() );
        this.superTarea.addTarea( new tValidar() );
        this.superTarea.addTarea( new tEnviarCorreo() );
    }

    ejecutar(id:Number, nombre:String, precio:Number):void{
        let producto:Producto = this.crearProducto(id, nombre, precio);

        this.superTarea.getTareas().forEach(tarea => {
            this.arrEstado.push( tarea.ejecutar(producto) );
        });
    }

    getEstado():Array<String>{
        return this.arrEstado;
    }

    private crearProducto(id:Number, nombre:String, precio:Number):Producto{
        return new Producto(id, nombre, precio);
    }
}