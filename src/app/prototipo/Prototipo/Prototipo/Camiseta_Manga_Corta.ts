import { Camiseta } from "../iPrototipo/Camiseta";
import { Tela } from "../Material/Tela";

export class Camiseta_Manga_Corta extends Camiseta{
    constructor(pId:Number, pTalla:String, pColor:String, pEstampado:String){
        super();

        this.setNombre("Prototipo");
        this.setTalla(pTalla);
        this.setColor(pColor);
        this.setManga("Corta");
        this.setEstampado(pEstampado);
        this.setMaterial( new Tela(2000) );
    }

    clone():Camiseta{
        return new Camiseta_Manga_Corta(this.getId(), this.getTalla(), this.getColor(), this.getEstampado() );
    }
}