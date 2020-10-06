import { iDocumento } from '../Interface/iDocumento';

export class Documento implements iDocumento {
    acceder(usuario: Number): String {
        return `Accediendo al documento con permiso de: ${usuario === 0 && 'Profesor' || usuario === 1 && 'Asistente' || usuario === 2 && 'Estudiante'}`;
    }    
    imprimirTexto(usuario: Number): String {
        if(usuario === 0)
            return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
        else if(usuario == 1)
            return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
        else if(usuario == 2){
            return `Acceso denegado`;
        }
    }
}