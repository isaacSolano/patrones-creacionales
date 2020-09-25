import { CuerpoGeometrico } from './Implementacion/CuerpoGeometrico';

export class Gestor{
    private cuerpoGeometrico:CuerpoGeometrico;

    public calcularArea(pValores:any):String{
        try{
            this.crearFigura(pValores);
            this.determinarCalculo();
            return this.obtenerArea();
        }catch(err){
            throw err;
        }
    }

    private crearFigura(pValores:any):void{
        this.cuerpoGeometrico = new CuerpoGeometrico(pValores.radio, pValores.lados, pValores.base, pValores.altura);
    }

    private determinarCalculo():void{
        try{
            this.cuerpoGeometrico.establecerCalculoArea();
        }catch(err){
            throw err;
        }
    }

    private obtenerArea():String{
        return this.cuerpoGeometrico.obtenerArea();
    }
}