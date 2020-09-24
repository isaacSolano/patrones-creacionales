import { Contexto } from './Interprete/Contexto';

export class Gestor{
    public obtenerResultado(mapOperacion:Map<String, String>):String{
        let interprete:Contexto = new Contexto();
        this.agregarCalculo( mapOperacion.get("primerNumero"), interprete );
        interprete.setOperacion( mapOperacion.get("operacion") );
        this.agregarCalculo( mapOperacion.get("segundoNumero"), interprete );

        return `El resultado de ${interprete.getNumero( mapOperacion.get("primerNumero"))}${interprete.getOperacion()}${interprete.getNumero( mapOperacion.get("segundoNumero") )} es: ${interprete.getResultado()}`;
    }

    private agregarCalculo(txtNumero:String, interprete:Contexto):void{
        interprete.setOperador( interprete.getNumero(txtNumero) );
        interprete.calcular();
    }
}