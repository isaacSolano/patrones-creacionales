export class Memento {
    private text:String;
    private date:String;

    constructor(text:String, date:String){
        this.text = text;
        this.date = date;
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