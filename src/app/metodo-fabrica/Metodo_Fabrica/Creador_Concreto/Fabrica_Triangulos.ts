import { Metodo_Fabrica_Abstracta } from "../Creador/Metodo_Fabrica_Abstracta";
import { Triangulo } from "../Producto/Triangulo";

import { Equilatero } from "../Productos_Concretos/Equilatero";
import { Isoceles } from "../Productos_Concretos/Isoceles";
import { Escaleno } from "../Productos_Concretos/Escaleno";

export class Fabrica_Triangulos implements Metodo_Fabrica_Abstracta{
    crearTriangulo(pLadoA:Number, pLadoB:Number, pLadoC:Number):Triangulo{
        if( (pLadoA === pLadoB) && (pLadoB === pLadoC)){
            // equilatero
            return new Equilatero(pLadoA, pLadoB, pLadoC, "Equilatero");
        }else if( (pLadoA === pLadoB) || (pLadoB === pLadoC) || (pLadoA === pLadoC) ){
            // isoceles
            return new Isoceles(pLadoA, pLadoB, pLadoC, "Isoceles");
        }else{
            // escaleno
            return new Escaleno(pLadoA, pLadoB, pLadoC, "Escaleno");
        }
    }
}