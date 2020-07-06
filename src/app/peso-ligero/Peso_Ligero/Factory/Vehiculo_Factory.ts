import { MarcaModelo } from '../Objetos/MarcaModelo';
import { Honda } from '../Objetos/Honda';

import { Helper } from '../Helper';
import { Toyota } from '../Objetos/Toyota';
import { Nissan } from '../Objetos/Nissan';
import { DataFactory } from '../DataFactory';

export class Vehiculo_Factory{
    private data_factory:DataFactory;
    private arrCarros:any;
    private helper:Helper;

    constructor(){
        this.data_factory = new DataFactory("arrCarros");
        this.arrCarros = this.data_factory.obtenerData();
        this.helper = new Helper();
    }

    public obtenerCarro(marca:String, modelo:String, color:String):MarcaModelo{
        let fMarMod:MarcaModelo = null,
            kMarMod:any = this.helper.generarKey(marca, modelo, color);

        if(this.arrCarros[kMarMod]){
            fMarMod = this.arrCarros[kMarMod];
        }else{
            switch(marca){
                case "honda":
                    fMarMod = new Honda(marca, modelo, color);
                    break;
                    
                case "toyota":
                    fMarMod = new Toyota(marca, modelo, color);
                    break;
                    
                case "nissan":
                    fMarMod = new Nissan(marca, modelo, color);
                    break;
            }

            this.arrCarros[kMarMod] = fMarMod;
            this.data_factory.guardarData(this.arrCarros);
        }

        return fMarMod;
    }
}