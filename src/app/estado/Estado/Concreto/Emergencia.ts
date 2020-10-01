import { Estado } from '../Abstracto/Estado';

export class Emergencia extends Estado{
    mostrar(): String {
        return `Alerta emergencia`;
    }
}