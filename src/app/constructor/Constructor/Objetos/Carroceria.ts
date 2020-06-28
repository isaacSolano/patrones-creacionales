export class Carroceria{
    private material:String;

    constructor(pMaterial:String){
        this.material = pMaterial;
    }

    setMaterial(pMaterial:String){
        this.material = pMaterial;
    }
    getMaterial(){
        return this.material;
    }
}