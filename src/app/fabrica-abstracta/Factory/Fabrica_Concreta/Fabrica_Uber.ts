import { Fabrica_Abstracta } from "../Fabrica_Abstracta/Fabrica_Abstracta";
import { Vehiculo } from "../Producto_Abstracto/Vehiculo";
import { Uber } from '../Producto_Concreto/Uber';

export class Fabrica_Uber implements Fabrica_Abstracta{
    crearVehiculo():Vehiculo{
        let newUber = new Uber(),
            codigo = newUber.generarCodigo();

        newUber.setCodigo(codigo);
        
        return newUber;
    }
}