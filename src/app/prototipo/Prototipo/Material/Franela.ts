import { Material } from "../Material/Material";

export class Franela extends Material{
    private id:Number;

    constructor(pPrecio:Number){
        super();

        this.id = 1;
        super.setDescripcion("Franela");
        this.setPrecio(pPrecio)
    }

    getId():Number{
        return this.id;
    }
    setId(pId:Number){
        this.id = pId;
    }
}