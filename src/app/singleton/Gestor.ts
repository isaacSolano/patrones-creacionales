import { Config } from './Singleton/Config';

export class Gestor {
    private config:Config;

    crearConexion(url:String, nombre:String){
        this.config = Config.conectarse(url, nombre);
    }

    desconectarse(){
        Config.desconectar();
    }

    obtenerUrl():String{
        return this.config.getUrl();
    }

    obtenerNombre():String{
        return this.config.getNombre();
    }
}