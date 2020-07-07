import { Vehiculo } from './Peso_Ligero/Objetos/Extrinseco/Vehiculo';
import { Helper } from '../Helper';

export class Gestor{
    private helper:Helper;
    constructor(){
        this.helper = new Helper();
    }

    public generar_vehiculo(marca:String, modelo:String, color:String, placa:String, cedula:Number):String{
        let fecha_ingreso:String = this.helper.obtenerFecha_Actual(),
            mVehiculo:Vehiculo = new Vehiculo(marca, modelo, color, placa, fecha_ingreso, cedula);
        
        console.log(mVehiculo);
        
        return mVehiculo.toString();
    }
}