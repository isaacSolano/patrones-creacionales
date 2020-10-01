import { Network } from './Template/abstract/Network';
import { Facebook } from './Template/concrete/Facebook';
import { Twitter } from './Template/concrete/Twitter';
import { Message } from './Template/objects/Message';
import { User } from './Template/objects/User';

export class Gestor {
    network:Network;
    user:User;
    mensaje:Message;

    constructor(){
        this.network = null;
    }

    public login(username:String, password:String):void{
        this.user = new User(username, password);
    }

    public nuevo_mensaje(mensaje:String):void{
        this.mensaje = new Message(mensaje);
    }

    public publicar(id:String):String{
        this.nueva_conexion(id);
        const result:String = this.network.post(this.mensaje);
        this.desconectar();

        return result;
    }

    private nueva_conexion(id:String):void{
        switch(id){
            case "0":
                this.network = new Facebook(this.user.getUsername(), this.user.getPassword());
                break;
                
            case "1":
                this.network = new Twitter(this.user.getUsername(), this.user.getPassword());
                break;
        }
    }

    private desconectar():void{
        this.network.logout();
    }
}