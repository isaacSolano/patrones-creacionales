import { DocumentoProxy } from './Proxy/Implementacion/DocumentoProxy';
import { iDocumento } from './Proxy/Interface/iDocumento';

export class Gestor {
    private documento:iDocumento;

    constructor(){
        this.documento = new DocumentoProxy();
    }

    public accederDocumento(tipoUsuario:Number):String{
        return `${this.documento.acceder(tipoUsuario)}\n${this.documento.imprimirTexto(tipoUsuario)}`;
    }
}