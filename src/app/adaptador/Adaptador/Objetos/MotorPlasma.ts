export class MotorPlasma{
    private Activado:boolean;
    private TipoMotor:String;
    private Estado:String;

    constructor(){
        this.Activado = false;
        this.TipoMotor = "plasma";
        this.Estado = `Motor ${this.TipoMotor} creado`;
    }

    activar():String{
        this.Activado = true;
        this.Estado = `Motor de ${this.TipoMotor} activado`;

        return this.Estado;
    }

    empezarPropulsion():String{
        this.Estado = (this.Activado ? "Comenzando propulsion" : "Motor inactivo, no se puede comenzar la propulsion");
    
        return this.Estado;
    }

    incrementarPropulsion():String{
        this.Estado = (this.Activado ? "Incrementando propulsion" : "Motor inactivo, no se puede incrementar la propulsion");

        return this.Estado;
    }

    decreserPropulsion():String{
        this.Estado = (this.Activado ? "Deteniendo propulsion" : "El motor esta inactivo");

        return this.Estado;
    }

    descativar():String{
        this.Estado = (this.Activado ? "Desactivando motor" : "El motor no estaba activo");

        return this.Estado;
    }
}