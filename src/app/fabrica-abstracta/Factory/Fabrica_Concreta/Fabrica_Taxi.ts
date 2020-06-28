import { Fabrica_Abstracta } from "../Fabrica_Abstracta/Fabrica_Abstracta";
import { Taxi } from "../Producto_Concreto/Taxi";
import { Vehiculo } from "../Producto_Abstracto/Vehiculo";

export class Fabrica_Taxi implements Fabrica_Abstracta{
    crearVehiculo():Vehiculo{
        let newTaxi:Taxi = new Taxi(),
            codigo = newTaxi.generarCodigo();
        
        newTaxi.setCodigo(codigo);

        return newTaxi;
    }
}