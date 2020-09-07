import { TareaProducto } from '../Abstracto/TareaProducto';
import { Producto } from '../Producto';

export class tValidar implements TareaProducto{

    ejecutar(producto: Producto):String {
        let mensaje;

        if(producto.getPrecio() > 130){
            mensaje = "Producto sin impuestos";
        }else{
            mensaje = "Producto con impuestos";
        }

        return mensaje;
    }
}