export abstract class iEmpresa{
    public nombre:String;

    abstract getSalario():Number;
    abstract getNombre():String;
    abstract setSalario(salario:Number);
    abstract setNombre(nombre:String);

    abstract agregarComponente(composicion:iEmpresa):String;

    abstract toString():Object;
}