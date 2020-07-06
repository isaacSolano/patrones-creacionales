import { Honda } from './Objetos/Honda';
import { Nissan } from './Objetos/Nissan';
import { Toyota } from './Objetos/Toyota';

export class DataFactory{
    private formatData:any = {};
    private data_found:any;
    private key:any;
    
    constructor(key:any){
        this.data_found = [];
        this.key = key;
    }

    public obtenerData():any{
        this.data_found = JSON.parse(localStorage.getItem(this.key)) || {};

        Object.keys(this.data_found).map(key => {
            switch(this.data_found[key].Marca){
                case "nissan":
                    this.formatData[key] = new Nissan(this.data_found[key].Marca, this.data_found[key].Modelo, this.data_found[key].Color);
                    break;

                case "honda":
                    this.formatData[key] = new Honda(this.data_found[key].Marca, this.data_found[key].Modelo, this.data_found[key].Color);
                    break;
                
                case "toyota":
                    this.formatData[key] = new Toyota(this.data_found[key].Marca, this.data_found[key].Modelo, this.data_found[key].Color);
                    break;
            }
        });

        return this.formatData;
    }

    public guardarData(data:any){
        localStorage.setItem(this.key, JSON.stringify(data));
    }
}