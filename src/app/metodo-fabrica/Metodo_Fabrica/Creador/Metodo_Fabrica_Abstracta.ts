import { Triangulo } from "../Producto/Triangulo";

export interface Metodo_Fabrica_Abstracta{
    crearTriangulo(pLadoA:Number, pLadoB:Number, pLadoC:Number):Triangulo;
}