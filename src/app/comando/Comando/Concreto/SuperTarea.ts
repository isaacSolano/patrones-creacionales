import { TareaProducto } from '../Abstracto/TareaProducto';
import { Producto } from '../Producto';

export class SuperTarea implements TareaProducto{
    private arrTareas:Array<TareaProducto>;
    private arrEstado:Array<String>;

    constructor(){
        this.arrTareas = new Array();
        this.arrEstado = new Array();
    }

    public addTarea(tarea:TareaProducto):void{
        this.arrTareas.push(tarea);
    }

    public getTareas():Array<TareaProducto>{
        return this.arrTareas;
    }

    public getEstado():Array<String>{
        return this.arrEstado;
    }

    ejecutar(producto: Producto):String {
        this.arrTareas.forEach(tarea => {
            this.arrEstado.push( tarea.ejecutar(producto) );
        });

        return "Tareas completadas";
    }

}