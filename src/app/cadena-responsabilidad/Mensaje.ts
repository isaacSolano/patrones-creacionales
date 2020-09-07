export class Mensaje {
    getPara() {
        throw new Error("Method not implemented.");
    }
    private dest:String;
    private cont:String;

    constructor(dest:String, cont:String){
        this.dest = dest;
        this.cont = cont;
    }

    public getDest():String{
        return this.dest;
    }

    public getCont():String{
        return this.cont;
    }
}