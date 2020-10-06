export class Config {
    private static config:Config = null;
    private url:String;
    private nombre:String;

    static conectarse(url:String, nombre:String):Config{
        if(this.config === null){
            this.config = new Config(url, nombre);
        }

        return this.config;
    }

    static desconectar(){
        this.config = null;
    }

    private constructor(url:String, nombre:String){
        this.setUrl(url);
        this.setNombre(nombre);
    }

    setUrl(url:String){
        this.url = url;
    }
    setNombre(nombre:String){
        this.nombre = nombre;
    }

    getUrl(){
        return this.url;
    }
    getNombre(){
        return this.nombre;
    }
}