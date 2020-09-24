import { Caretaker } from './Memento/Caretaker';
import { Origin } from './Memento/Origin';

export class Gestor {
    private origin:Origin;
    private caretaker:Caretaker;

    constructor(text:String, date:String){
        this.origin = new Origin(text, date);
        this.caretaker = new Caretaker();
        this.actualizarMemento();
    }

    actualizarMemento():void{
        this.caretaker.setMemento( this.origin.createMemento() );
    }

    retrocederMemento():void{
        this.origin.setMemento( this.caretaker.getMemento() );
    }

    obtenerTexto():String{
        return this.origin.getText();
    }

    obtenerFecha():String{
        return this.origin.getDate();
    }

    cambiarTexto(texto:String):void{
        this.origin.setText(texto);
    }

    cambiarFecha(fecha:String):void{
        this.origin.setDate(fecha);
    }
}