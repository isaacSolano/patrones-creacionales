export class Receta{
    private cant_cafe:Number;
    private cant_agua:Number;
    private cant_leche:Number;
    private nombre:String;

    CafeNegro(){
        this.setCant_cafe(1);
        this.setCant_agua(2);
        this.setCant_leche(0);
        this.setNombre("Cafe negro");
    }

    CafeConLeche(){
        this.setCant_cafe(1);
        this.setCant_agua(1);
        this.setCant_leche(1);
        this.setNombre("Cafe con leche");
    }

    CafeEspresso(){
        this.setCant_cafe(2);
        this.setCant_agua(1);
        this.setCant_leche(0);
        this.setNombre("Cafe espresso");
    }

    CafeCapuccino(){
        this.setCant_cafe(2);
        this.setCant_agua(1);
        this.setCant_leche(1);
        this.setNombre("Cafe capuccino");
    }

    setCant_cafe(cant_cafe:Number):void{
        this.cant_cafe = cant_cafe;
    }
    setCant_agua(cant_agua:Number):void{
        this.cant_agua = cant_agua;
    }
    setCant_leche(cant_leche:Number):void{
        this.cant_leche = cant_leche;
    }
    setNombre(nombre:String):void{
        this.nombre = nombre;
    }

    getCant_cafe():Number{
        return this.cant_cafe;
    }
    getCant_agua():Number{
        return this.cant_agua;
    }
    getCant_leche():Number{
        return this.cant_leche;
    }
    getNombre():String{
        return this.nombre;
    }
}