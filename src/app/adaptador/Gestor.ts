import { Motor } from './Adaptador/Objetos/Motor';
import { MotorComun } from './Adaptador/Objetos/MotorComun';
import { MotorElectrico } from './Adaptador/Objetos/MotorElectrico';
import { MotorEconomico } from './Adaptador/Objetos/MotorEconomico';
import { MotorElectricoAdapter } from './Adaptador/Adaptadores/MotorElectricoAdapter';
import { MotorPlasmaAdapter } from './Adaptador/Adaptadores/MotorPlasmaAdapter';

export class Gestor{
    private arrMotoresCreados:Array<Motor> = [];

    constructor(){}

    crearMotorComun(){
        this.agregarMotor( new MotorComun() );
    }

    crearMotorEconomico(){
        this.agregarMotor( new MotorEconomico() );
    }

    crearAdaptadorElectrico(){
        this.agregarMotor( new MotorElectricoAdapter() );
    }

    crearAdaptadorPlasma(){
        this.agregarMotor( new MotorPlasmaAdapter() );
    }

    agregarMotor(motor:Motor){
        this.arrMotoresCreados.push(motor);
    }

    obtenerInfoMotoresCreados():Array<Object>{
        let arrInfoMotores:Array<Object> = [];

        this.arrMotoresCreados.forEach(each => {
            arrInfoMotores.push({
                    "paso_1": each.encender(),
                    "paso_2": each.acelerar(),
                    "paso_3": each.apagar()
            });
        });

        return arrInfoMotores;
    }
}