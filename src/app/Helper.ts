export class Helper{
    constructor(){}

    public alAzar():Array<Number>{
        return [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)];
    }

    public generarKey(marca:String, modelo:String, color:String):String{
        return `${marca}-${modelo}-${color}`;
    }

    public obtenerFecha_Actual():String{
        return `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    }

    public randomize(max:any):Number{
        return Math.floor(Math.random() * max);
    }

    public getColor(pNumero:Number):String{
        let color:String = "Blanco";

        switch (pNumero){
            case 1:
                color = "Rosado"
                break;

            case 2:
                color = "Azul"
                break;

            case 3:
                color = "Verde"
                break;

            case 4:
                color = "Rojo"
                break;
            
            case 5:
                color = "Negro"
                break;
        }

        return color;
    }

    public getEstampado(pNumero:Number):String{
        let estampado:String = "Lisa";

        switch (pNumero){
            case 1:
                estampado = "Triangulos"
                break;

            case 2:
                estampado = "Lineas"
                break;

            case 3:
                estampado = "Cuadros"
                break;

            case 4:
                estampado = "Caricatura"
                break;
            
            case 5:
                estampado = "Artista"
                break;
        }

        return estampado;
    }

    public getMultipo(numero_1:any, numero_2:any):boolean{
        return numero_1%numero_2 === 0 ? true : false;
    }

    public getNombreEquipo():String{
        let numero:Number = this.randomize(5),
            nombre:String;
    
        switch(numero){
            case 1:
                nombre = "QA";
                break;

            case 2:
                nombre = "Front-End"
                break;

                
            case 3:
                nombre = "Back-End";
                break;

            case 4:
                nombre = "DB Admins"
                break;

            default:
                nombre = "Disenadores";
                break;
        }

        return nombre;
    }
}