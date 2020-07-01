import { Motor } from "../Objetos/Motor";
import { MotorPlasma } from "../Objetos/MotorPlasma";

export class MotorPlasmaAdapter extends Motor{
    private motorPlasma:MotorPlasma;

    constructor(){
        super();

        this.TipoMotor = "plasma adaptado";
        this.Estado = `Motor ${this.TipoMotor} creado`;
        this.motorPlasma = new MotorPlasma();
    }
    encender():String{
        this.Estado = `${this.motorPlasma.activar()}, ${this.motorPlasma.empezarPropulsion()}`;
    
        return this.Estado;
    }

    acelerar():String{
        this.Estado = `${this.motorPlasma.incrementarPropulsion()}`;

        return this.Estado;
    }

    apagar():String{
        this.Estado = `${this.motorPlasma.decreserPropulsion()}, ${this.motorPlasma.descativar()}`;

        return this.Estado;
    }
}