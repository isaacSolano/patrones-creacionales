import { Producto } from '../Producto';

export interface TareaProducto{
    ejecutar(producto:Producto):String;
}