import { Triangulo } from "./Metodo_Fabrica/Producto/Triangulo";
import { Fabrica_Triangulos } from "./Metodo_Fabrica/Creador_Concreto/Fabrica_Triangulos";

export class Gestor{
    private arrTriangulosCreados = [];
    private creadorTriangulos:Fabrica_Triangulos = new Fabrica_Triangulos();
    
    constructor(){}

    nuevoTriangulo(arrLados:Array<Number>){
        this.arrTriangulosCreados.push(
            this.creadorTriangulos.crearTriangulo(arrLados[0], arrLados[1], arrLados[2])
        );
    }

    obtenerTriangulos():Array<Triangulo>{
        return this.arrTriangulosCreados;
    }
}