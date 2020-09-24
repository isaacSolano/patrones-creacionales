import { Memento } from './Memento';

export class Caretaker {
    private memento:Memento;

    public setMemento(memento:Memento){
        this.memento = memento;
    }
    public getMemento():Memento{
        return this.memento;
    }
}