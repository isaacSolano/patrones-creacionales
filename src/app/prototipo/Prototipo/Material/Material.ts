export abstract class Material{
    private descripcion:String;
    private precio:Number;

    getDescripcion():String{
        return this.descripcion;
    }
    setDescripcion(pDescripcion:String){
        this.descripcion = pDescripcion;
    }

    getPrecio():Number{
        return this.precio;
    }
    setPrecio(pPrecio:Number){
        this.precio = pPrecio;
    }
}