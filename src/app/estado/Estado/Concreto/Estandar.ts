import { Estado } from '../Abstracto/Estado';

export class Estandar extends Estado {

    mostrar(): String {
        return `Alerta estandar`;
    }
}