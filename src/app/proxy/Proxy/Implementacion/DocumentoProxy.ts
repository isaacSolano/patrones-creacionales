import { iDocumento } from '../Interface/iDocumento';
import { Documento } from './Documento';

export class DocumentoProxy implements iDocumento {
    private documento:Documento = new Documento();
    
    acceder(usuario: Number): String {
        if(usuario === 0){
            return `Usuario con acceso, cargando informacion\n${this.documento.acceder(usuario)}`;
        }else if(usuario === 1){
            return `Usuario con acceso parcial, cargando informacion\n${this.documento.acceder(usuario)}`;
        }else if(usuario == 2){
            return `Usuario sin acceso\n${this.documento.acceder(usuario)}`;
        }
    }

    imprimirTexto(usuario: Number): String {
        return this.documento.imprimirTexto(usuario)
    }
}