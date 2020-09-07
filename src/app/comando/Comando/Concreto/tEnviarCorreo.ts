import { TareaProducto } from '../Abstracto/TareaProducto';
import { Producto } from '../Producto';

export class tEnviarCorreo implements TareaProducto{
    ejecutar(producto: Producto):String {
        return producto.getNombre() + " enviado por correo";
    }
}