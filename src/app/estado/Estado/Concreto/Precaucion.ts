import { Estado } from '../Abstracto/Estado';

export class Precaucion extends Estado {
    mostrar(): String {
        return `Alerta precaucion`;
    }
}