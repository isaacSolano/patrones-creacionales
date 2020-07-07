import { Helper } from '../Helper';
import { iColor } from './Puente/Abstracta/IColor';
import { Blanco } from './Puente/Color/Blanco';
import { Rojo } from './Puente/Color/Rojo';
import { Circulo } from './Puente/Figuras/Circulo';
import { Rectangulo } from './Puente/Figuras/Rectangulo';
import { Triangulo } from './Puente/Figuras/Triangulo';
import { Rombo } from './Puente/Figuras/Rombo';
import { Figura_Abstracta } from './Puente/Abstracta/Figura_Abstracta';

export class Gestor{
    private helper:Helper;
    private arrFigurasCreadas:Array<Figura_Abstracta>;

    constructor(){ 
        this.helper = new Helper();
        this.arrFigurasCreadas = [];
    }

    crearFigura(figura:String){
        let color:iColor = this.obtenerColor( this.helper.randomize(3) );

        switch(figura) {
            case "Circulo":
                this.agregarFigura( new Circulo(color) );
                break;
            
            case "Rectangulo":
                this.agregarFigura( new Rectangulo(color) );
                break;

            case "Triangulo":
                this.agregarFigura( new Triangulo(color) );
                break;

            case "Rombo":
                this.agregarFigura( new Rombo(color) );
                break;
        }
    }

    obtenerColor(tipo:Number):iColor{
        let color:iColor = null;

        switch(tipo){
            case 0:
                color = null;
                break;
            
            case 1:
                color = new Blanco();
                break;

            case 2:
                color = new Rojo();
                break;
        }

        return color;
    }

	cambiarColor(indice:any){
        this.arrFigurasCreadas[indice].setColor(this.obtenerColor( this.helper.randomize(3) ));
    }

    agregarFigura(figura:Figura_Abstracta){
        this.arrFigurasCreadas.push(figura);
    }

    obtenerInfoFigurasCreadas():Array<String>{
        let arrInfoFigurasCreadas:Array<String> = [];

        this.arrFigurasCreadas.forEach(figura => {
            arrInfoFigurasCreadas.push( figura.dibujar() );
        });

        return arrInfoFigurasCreadas;
    }
}