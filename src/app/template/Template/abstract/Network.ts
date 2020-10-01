import { Message } from '../objects/Message';

export abstract class Network {
    private username:String;
    private password:String;
    private mensaje:String;

    setUsername(username:String):void{
        this.username = username;
    }
    getUsername():String{
        return this.username;
    }

    setPassword(password:String):void{
        this.password = password;
    }
    getPassword():String{
        return this.password;
    }

    post(mensaje:Message):String{
        let result:String = "";

        if( this.login(this.getUsername(), this.getPassword()) ){
            result = this.publish(mensaje);
        }

        return result;
    }

    abstract publish(mensaje:Message):String;
    abstract login(username:String, password:String):String;
    abstract sendData(data:any):String;
    abstract logout():String;
}