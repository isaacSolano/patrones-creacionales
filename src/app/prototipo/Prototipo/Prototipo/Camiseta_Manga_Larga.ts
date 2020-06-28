import { Camiseta } from "../iPrototipo/Camiseta";
import { Franela } from '../Material/Franela';

export class Camiseta_Manga_Larga extends Camiseta{
    constructor(pId:Number, pTalla:String, pColor:String, pEstampado:String){
        super();

        this.setNombre("Prototipo");
        this.setTalla(pTalla);
        this.setColor(pColor);
        this.setManga("Larga");
        this.setEstampado(pEstampado);
        this.setMaterial( new Franela(5000) );
    }

    clone():Camiseta{
        return new Camiseta_Manga_Larga(this.getId(), this.getTalla(), this.getColor(), this.getEstampado() );
    }
}