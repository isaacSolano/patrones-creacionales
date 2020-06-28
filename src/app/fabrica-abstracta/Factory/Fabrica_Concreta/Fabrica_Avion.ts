import { Fabrica_Abstracta } from "../Fabrica_Abstracta/Fabrica_Abstracta";
import { Vehiculo } from "../Producto_Abstracto/Vehiculo";
import { Avion } from "../Producto_Concreto/Avion";

export class Fabrica_Avion implements Fabrica_Abstracta{
    crearVehiculo():Vehiculo{
        let newAvion = new Avion(),
            codigo = newAvion.generarCodigo();
        
        newAvion.setCodigo(codigo);

        return newAvion;
    }
}