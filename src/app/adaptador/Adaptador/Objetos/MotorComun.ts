import { Motor } from "./Motor";

export class MotorComun extends Motor{

    constructor(){
        super();

        this.TipoMotor = "comun";
        this.Estado = `Motor ${this.TipoMotor} creado`;
    }

    encender():String{
        this.Estado = `Encendiendo motor ${this.TipoMotor}`;

        return this.Estado;
    }

    acelerar():String{
        this.Estado = `Acelerando motor ${this.TipoMotor}`;

        return this.Estado;
    }

    apagar():String{
        this.Estado = `Apagando motor ${this.TipoMotor}`;

        return this.Estado;
    }
}