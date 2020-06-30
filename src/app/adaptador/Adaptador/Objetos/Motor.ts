export abstract class Motor{
    protected TipoMotor:String = "";
    protected Estado:String = "";

    abstract encender():String;
    abstract acelerar():String;
    abstract apagar():String;
}