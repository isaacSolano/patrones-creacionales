import { Motor } from '../Objetos/Motor';
import { MotorElectrico } from '../Objetos/MotorElectrico';

export class MotorElectricoAdapter extends Motor{
    private motorElectrico:MotorElectrico;

    constructor(){
        super();

        this.TipoMotor = "electrico adaptado";
        this.Estado = `Motor ${this.TipoMotor} creado`;
        this.motorElectrico = new MotorElectrico();
    }
    encender():String{
        this.Estado = `${this.motorElectrico.conectar()}, ${this.motorElectrico.activar()}`;
    
        return this.Estado;
    }

    acelerar():String{
        this.Estado = `${this.motorElectrico.acelerar()}`;

        return this.Estado;
    }

    apagar():String{
        this.Estado = `${this.motorElectrico.detener()}, ${this.motorElectrico.desconectar()}`;

        return this.Estado;
    }
}