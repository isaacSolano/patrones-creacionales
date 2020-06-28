export class Helper{

    constructor(){}

    randomize():Number{
        return Math.floor(Math.random() * 5);
    }

    getColor(pNumero:Number):String{
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

    getEstampado(pNumero:Number):String{
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

    getMultipo(numero_1:any, numero_2:any):boolean{
        return numero_1%numero_2 === 0 ? true : false;
    }
}