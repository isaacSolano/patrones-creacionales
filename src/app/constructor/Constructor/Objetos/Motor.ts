export class Motor{
    private cilindraje:String;


    constructor(pCilindraje:String){
        this.cilindraje = pCilindraje;
    }

    setCilindraje(pCilindraje:String){
        this.cilindraje = pCilindraje;
    }
    getCilindraje():String{
        return this.cilindraje;
    }
}