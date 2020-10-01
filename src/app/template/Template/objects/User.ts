import { Mensaje } from 'src/app/cadena-responsabilidad/Mensaje';

export class User {
    username:String;
    password:String;

    constructor(username:String, password:String){
        this.setUsername(username);
        this.setPassword(password);
    }

    setUsername(username:String){
        this.username = username;
    }
    setPassword(password:String){
        this.password = password;
    }

    getUsername():String{
        return this.username;
    }
    getPassword():String{
        return this.password;
    }
}