export class Elevalunas_Electrico{
    private ventanas_delanteras:boolean;
    private ventanas_traseras:boolean;
    
    constructor(pVentanas_Delanteras:boolean, pVentanas_Traseras:boolean){
        this.ventanas_delanteras = pVentanas_Delanteras;
        this.ventanas_traseras = pVentanas_Traseras;
    }

    setVentanas_Delanteras(pVentanas_Delanteras:boolean){
        this.ventanas_delanteras = pVentanas_Delanteras;
    }

    getVentanas_Delanteras():boolean{
        return this.ventanas_delanteras;
    }


    setVentanas_Traseras(pVentanas_Traseras:boolean){
        this.ventanas_traseras = pVentanas_Traseras;
    }

    getVentanas_Traseras():boolean{
        return this.ventanas_traseras;
    }
}