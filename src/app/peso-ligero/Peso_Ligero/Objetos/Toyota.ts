import { MarcaModelo } from './MarcaModelo';

export class Toyota extends MarcaModelo{

    constructor(marca:String, modelo:String, color:String){
        super(marca, modelo, color);
    }
    
}