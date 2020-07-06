export class Helper{
    constructor(){}

    public generarKey(marca:String, modelo:String, color:String):String{
        return `${marca}-${modelo}-${color}`;
    }

    public obtenerFecha_Actual():String{
        return `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    }
}