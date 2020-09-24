import { Memento } from './Memento';

export class Origin {
    private text:String;
    private date:String;

    constructor(text:String, date:String){
        this.text = text;
        this.date = date;
    }

    public setMemento(memento:Memento){
        this.text = memento.getText();
        this.date = memento.getDate();
    }
    public createMemento():Memento{
        return new Memento(this.text, this.date);
    }

    public setText(text:String){
        this.text = text;
    }
    public setDate(date:String){
        this.date = date;
    }

    public getText():String{
        return this.text;
    }
    public getDate():String{
        return this.date;
    }
}