export abstract class MarcaModelo{
    public Marca:String;
    public Modelo:String;
    public Color:String;

    constructor(marca:String, modelo:String, color:String){
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setColor(color);
    }

    public setMarca(marca:String){
        this.Marca = marca;
    }
    public setModelo(modelo:String){
        this.Modelo = modelo;
    }
    public setColor(color:String){
        this.Color = color;
    }

    public getMarca():String{
        return this.Marca;
    }
    public getModelo():String{
        return this.Modelo;
    }
    public getColor():String{
        return this.Color;
    }
}