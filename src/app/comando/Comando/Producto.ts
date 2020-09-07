export class Producto {
    private id:Number;
    private nombre:String;
    private precio:Number;

    constructor(id:Number, nombre:String, precio:Number){
        this.setId(id);
        this.setNombre(nombre);
        this.setPrecio(precio);
    }

    setId(id:Number){
        this.id = id;
    }

    getId():Number{
        return this.id;
    }

    setNombre(nombre:String){
        this.nombre = nombre;
    }
    
    getNombre():String{
        return this.nombre;
    }

    setPrecio(precio:Number){
        this.precio = precio;
    }
    
    getPrecio():Number{
        return this.precio;
    }
}