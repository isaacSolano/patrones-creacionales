import { Vehiculo } from "../Producto_Abstracto/Vehiculo";

export interface Fabrica_Abstracta{
    crearVehiculo():Vehiculo;
}