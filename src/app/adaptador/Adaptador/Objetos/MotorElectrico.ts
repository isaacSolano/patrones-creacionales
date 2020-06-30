export class MotorElectrico {
    private Conectado:boolean;
    private TipoMotor:String;
    private Estado:String;

    constructor(){
        this.Conectado = false;
        this.TipoMotor = "electrico";
        this.Estado = `Motor ${this.TipoMotor} creado`;
    }

    conectar():String{
        this.Estado = `Conectando motor ${this.TipoMotor}`;
        this.Conectado = true;

        return this.Estado;
    }

    activar():String{
        this.Estado = (!this.Conectado ? "No se puede activar porque no esta conectado" : `Activando motor ${this.TipoMotor}`);
    
        return this.Estado;
    }

    acelerar():String{
        this.Estado = (!this.Conectado ? "No se puede acelerar porque no esta conectado" : `Acelerando motor ${this.TipoMotor}`);
    
        return this.Estado;
    }

    detener():String{
        this.Estado = (!this.Conectado ? "No se puede detener porque no esta conectado" : `Deteniendo motor ${this.TipoMotor}`);
    
        return this.Estado;
    }

    desconectar():String{
        this.Estado = `Desconectando motor ${this.TipoMotor}`;
        this.Conectado = false;
        return this.Estado;
    }
}