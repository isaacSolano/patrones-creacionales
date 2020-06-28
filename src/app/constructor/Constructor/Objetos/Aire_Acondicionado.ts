export class Aire_Acondicionado{
    private condensador:String;

    constructor(pCondensador:String){
        this.condensador = pCondensador;
    }

    setCondensador(pCondensador:String){
        this.condensador = pCondensador;
    }
    getCondensador():String{
        return this.condensador;
    }
}