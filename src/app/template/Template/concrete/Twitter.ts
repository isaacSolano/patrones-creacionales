import { Message } from '../objects/Message';
import { Network } from '../abstract/Network';

export class Twitter extends Network {
    constructor(username:String, password:String){
        super();
        this.setUsername(username);
        this.setPassword(password);
    }
    
    publish(mensaje: Message): String {
        return this.sendData(mensaje.getMensaje());
    }

    login(username: String, password: String): String {
        let result = `El usuario: ${username}, con la contrasena: `;

        for(let i=0; i<password.length; i++){
            result += "*";
        }

        result += `\nAutentificacion correcta para Twitter`;

        return result;
    }

    sendData(data: any): String {
        return `Mensaje ${data} fue publicado por medio de Twitter`;
    }

    logout(): String {
        return `El usuario se desconecto exitosamente`;
    }
}