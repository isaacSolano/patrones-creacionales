import { aArea } from '../Base/aArea';
import { Circulo } from '../Derivadas/Circulo';
import { Poligono } from '../Derivadas/Poligono';
import { Rectangulo } from '../Derivadas/Rectangulo';
import { Triangulo } from '../Derivadas/Triangulo';

export class CuerpoGeometrico {
    private _estrategia:aArea;
    private radio:number;
    private lados:number;
    private base:number;
    private altura:number;

    constructor(radio:number, lados:number, base:number, altura:number){
        this.radio = radio;
        this.lados = lados;
        this.base = base;
        this.altura = altura;
    }

    public establecerCalculoArea():void{
        if( this.circulo() ){
            console.log("circulo");
            this._estrategia = new Circulo(this.radio);
        }else if( this.triangulo() ){
            console.log("triangulo");
            this._estrategia = new Triangulo(this.base, this.altura);
        }else if( this.rectangulo() ){
            console.log("rectangulo");
            this._estrategia = new Rectangulo(this.base, this.altura);
        }else if( this.poligonoRegular() ){
            console.log("poligono");
            this._estrategia = new Poligono(this.radio, this.lados);
        }else{
            throw new RangeError("No existe una forma de crear esa figura en este sistema");
        }
    }

    public obtenerArea():String{
        return `El area de la figura ${this._estrategia.getNombre()} es de: ${this._estrategia.calcularArea()}`;
    }

    public circulo():boolean{
        return (this.radio !== undefined && this.lados === undefined || this.lados === null && this.base === undefined || this.base === null && this.altura === undefined || this.altura === null);
    }
    
    public triangulo():boolean{
        return (this.radio === undefined || this.radio === null && this.base !== undefined && this.altura !== undefined && this.lados !== undefined) && (this.lados === 3);
    }

    public rectangulo():boolean{
        return (this.radio === undefined || this.radio === null && this.lados !== undefined && this.base !== undefined && this.altura !== undefined) && (this.lados === 4);
    }
    
    public poligonoRegular():boolean{
        return (this.radio !== undefined && this.lados !== undefined && this.base === undefined || this.base === null && this.altura === undefined || this.altura == null) && (this.lados > 4);
    }
}