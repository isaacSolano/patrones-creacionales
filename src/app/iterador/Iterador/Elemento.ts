export class Elemento {
    private nombre:String;
    public indice:Number;
    private seleccionado:Boolean;

    constructor(nombre:String, indice:Number, seleccionado:Boolean){
        this.nombre = nombre;
        this.indice = indice;
        this.seleccionado = seleccionado;
    }

    toString():String{
        return `${this.indice}_{nombre: ${this.nombre}, seleccionado: ${!this.seleccionado}}`;
    }
}