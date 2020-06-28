import { Camiseta } from "./Prototipo/iPrototipo/Camiseta";
import { Camiseta_Manga_Corta } from "./Prototipo/Prototipo/Camiseta_Manga_Corta";
import { Camiseta_Manga_Larga } from "./Prototipo/Prototipo/Camiseta_Manga_Larga";

import { Helper } from "./Helper";

export class Gestor{
    private Id_MangaCorta:any;
    private Id_MangaLarga:any;
    private prototipo_Manga_Corta:Camiseta;
    private prototipo_Manga_Larga:Camiseta;
    private helper:Helper = new Helper();

    private arrCamisetasCreadas:Array<Camiseta> = [];
    private arrPrototiposCreados:Array<Camiseta> = [];

    constructor(pId_MangaCorta, pId_MangaLarga){
        this.Id_MangaCorta = pId_MangaCorta;
        this.Id_MangaLarga = pId_MangaLarga;

        this.prototipo_Manga_Corta = new Camiseta_Manga_Corta(pId_MangaCorta, "M", "Blanco", "Lisa");
        this.prototipo_Manga_Larga = new Camiseta_Manga_Larga(pId_MangaLarga, "S", "Blanco", "Lisa");
    
        this.arrPrototiposCreados.push(this.prototipo_Manga_Corta);
        this.arrPrototiposCreados.push(this.prototipo_Manga_Larga);
    }

    nueva_camisa(pNumero:Number):void{
        let mSerie:Number = 0;
    
        if(this.helper.getMultipo(pNumero, 2)){
            // crear manga corta
            this.arrCamisetasCreadas.push( this.prototipo_Manga_Corta.clone() );

            this.Id_MangaCorta++;
            mSerie = this.Id_MangaCorta;
        }else{
            // crear manga larga
            this.arrCamisetasCreadas.push( this.prototipo_Manga_Larga.clone() );

            this.Id_MangaLarga++;
            mSerie = this.Id_MangaLarga;
        }

        this.updateClone(pNumero, mSerie);
    }

    updateClone(pNumero:any, mSerie:Number){
        let clone_camiseta = this.arrCamisetasCreadas[pNumero];

        clone_camiseta.setColor( this.helper.getColor(this.helper.randomize()) );
        clone_camiseta.setEstampado( this.helper.getEstampado(this.helper.randomize()) );
        clone_camiseta.setNombre(`Camiseta ${clone_camiseta.getColor()}, ${clone_camiseta.getEstampado()} hecha de ${clone_camiseta.getMaterial().getDescripcion()}`);
        clone_camiseta.setSerie(mSerie);
    }

    getPrototipos():Array<Object>{
        let arrInfoPrototipos:Array<Object> = [];

        this.arrPrototiposCreados.forEach(prototipo => {
            arrInfoPrototipos.push({
                "Manga": prototipo.getManga(),
                "Talla": prototipo.getTalla(),
                "Descripcion": prototipo.getNombre()
            });
        });
        
        return arrInfoPrototipos;
    }

    getClones():Array<Object>{
        let arrInfoCamisetas:Array<Object> = [];
        this.arrCamisetasCreadas.forEach(camiseta => {
            arrInfoCamisetas.push({
                "Serie": camiseta.getSerie(),
                "Manga": camiseta.getManga(),
                "Talla": camiseta.getTalla(),
                "Descripcion": camiseta.getNombre()
            });
        });

        return arrInfoCamisetas;
    }
}