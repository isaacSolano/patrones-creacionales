import { TareaProducto } from '../Abstracto/TareaProducto';
import { Producto } from '../Producto';

export class tImprimir implements TareaProducto{
    ejecutar(producto: Producto):String {
        return "El producto es: " + producto.getNombre() + ", su precio es: " + producto.getPrecio();
    }
}