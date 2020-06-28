import { Material } from "../Material/Material";

export abstract class Camiseta{
    public id:Number;
    private serie:Number;
    private nombre:String;
    private talla:String;
    private color:String;
    private manga:String;
    private estampado:String;
    private material:Material;

    setId(pId:Number){
        this.id = pId;
    }
    getId():Number{
        return this.id;
    }

    setSerie(pSerie:Number){
        this.serie = pSerie
    }
    getSerie():Number{
        return this.serie;
    }

    setNombre(pNombre:String){
        this.nombre = pNombre
    }
    getNombre():String{
        return this.nombre;
    }

    setTalla(pTalla:String){
        this.talla = pTalla
    }
    getTalla():String{
        return this.talla;
    }

    setColor(pColor:String){
        this.color = pColor
    }
    getColor():String{
        return this.color;
    }

    setManga(pManga:String){
        this.manga = pManga
    }
    getManga():String{
        return this.manga;
    }

    setEstampado(pEstampado:String){
        this.estampado = pEstampado
    }
    getEstampado():String{
        return this.estampado;
    }

    setMaterial(pMaterial:Material){
        this.material = pMaterial
    }
    getMaterial():Material{
        return this.material;
    }

    getInfo():String{
        return `Numero de serie: ${this.getSerie()}\n
                Nombre: ${this.getNombre()}\n
                Talla: ${this.getTalla()}\n
                Color: ${this.getColor()}\n
                Tipo de manga: ${this.getManga()}\n
                Tipo de estampado: ${this.getEstampado()}\n
                Tipo de material: ${this.getMaterial().getDescripcion()}        
        `;
    }

    abstract clone():Camiseta;
}