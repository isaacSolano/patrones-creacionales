export class Message {
    private mensaje:String;

    constructor(mensaje:String){
        this.setMensaje(mensaje);
    }

    setMensaje(mensaje:String){
        this.mensaje = mensaje;
    }
    getMensaje():String{
        return this.mensaje;
    }
}