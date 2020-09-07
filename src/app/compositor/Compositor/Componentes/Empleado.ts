import { iEmpresa } from '../Base/iEmpresa';

export class Empleado extends iEmpresa{
	private salario:Number;

	constructor(salario:Number, nombre:String){
		super();

		this.setSalario(salario);
		this.setNombre(nombre);
	}

	public getNombre(): String {
		return this.nombre;
	}
	public setNombre(nombre: String) {
		this.nombre = nombre;
	}
	public setSalario(salario: Number) {
		this.salario = salario;
	}
	public getSalario(): Number {
		return this.salario;
	}
	public agregarComponente(composicion:iEmpresa):String{
		return `Este empleado no puede agregar mas objetos`;
	}

	public toString():Object{
		return {
			nombre: this.getNombre(),
			salario: this.getSalario()
		};
	}
}