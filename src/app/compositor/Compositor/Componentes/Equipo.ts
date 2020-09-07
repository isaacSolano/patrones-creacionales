import { iEmpresa } from '../Base/iEmpresa';

export class Equipo extends iEmpresa{
    private salario:Number;
    private arrComposicion:Array<iEmpresa>;

    constructor(nombre:String){
        super();

        this.setSalario(0);
        this.setArrComposicion([]);
        this.setNombre(nombre);
    }

    public getNombre():String{
        return this.nombre;
    }
	public getSalario(): Number {
		return this.salario;
    }
    public setSalario(salario: Number) {
		this.salario = salario;
    }
    public setNombre(nombre:String){
        this.nombre = nombre;
    }
    public agregarComponente(composicion:iEmpresa):String{
        this.setSalario( this.getSalario() as any + composicion.getSalario() as any );
        this.arrComposicion.push(composicion);

        return `Componente agregado con exito`;
    }
    public toString():Object{
        return {
            nombreEquipo: this.getNombre(),
            salarioTotal: this.getSalario()
        }
    }
    
	
	public getArrComposicion(): Array<iEmpresa> {
		return this.arrComposicion;
    }
    public setArrComposicion(composicion: Array<iEmpresa>) {
		this.arrComposicion = composicion;
	}
}