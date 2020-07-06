import { MarcaModelo } from '../MarcaModelo';
import { Vehiculo_Factory } from '../../Factory/Vehiculo_Factory';

export class Vehiculo{
    // Factory necesario
    private vehiculo_factory:Vehiculo_Factory;

    // intrinsecos
    private datosIntrinsecos:MarcaModelo;
    
    // extrinsecos
    public Placa:String;
    public Fecha_Ingreso:String;
    public Cedula:Number;

    constructor(marca:String, modelo:String, color:String, placa:String, fecha_ingreso:String, cedula:Number){
        this.vehiculo_factory = new Vehiculo_Factory();
        
        this.setDatosIntrinsecos( this.vehiculo_factory.obtenerCarro(marca, modelo, color) );
        this.setDatosExtrinsecos(placa, cedula, fecha_ingreso);
    }

    // datos EXTRINSECOS
    private setDatosExtrinsecos(placa:String, cedula:Number, fecha_ingreso:String){
        this.setPlaca(placa);
        this.setCedula(cedula);
        this.setFecha_Ingreso(fecha_ingreso);
    }
    private setPlaca(placa:String){
        this.Placa = placa;
    }
    private setCedula(cedula:Number){
        this.Cedula = cedula;
    }
    private setFecha_Ingreso(fecha_Ingreso:String){
        this.Fecha_Ingreso = fecha_Ingreso;
    }

    // datos INTRINSECOS
    private setDatosIntrinsecos(marca_modelo:MarcaModelo){
        this.datosIntrinsecos = marca_modelo;
    }
    

    public getPlaca():String{
        return this.Placa;
    }
    public getFecha_Ingreso():String{
        return this.Fecha_Ingreso;
    }
    public getCedula():Number{
        return this.Cedula;
    }

    public toString():String{
        return `El vehiculo ${this.datosIntrinsecos.getMarca()}, ${this.datosIntrinsecos.getModelo()} ${this.datosIntrinsecos.getColor()}, numero de placa: ${this.getPlaca()}, ingreso el ${this.getFecha_Ingreso()}, bajo el dueno numero de cedula: ${this.getCedula()}`;
    }
}