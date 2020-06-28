import { Fabrica_Abstracta } from "../Fabrica_Abstracta/Fabrica_Abstracta";
import { Bus } from "../Producto_Concreto/Bus";
import { Vehiculo } from "../Producto_Abstracto/Vehiculo";

export class Fabrica_Bus implements Fabrica_Abstracta{
    crearVehiculo():Vehiculo{
        let newBus:Bus = new Bus(),
            codigo = newBus.generarCodigo();

        newBus.setCodigo(codigo);

        return newBus;
    }
}