import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-interprete',
	templateUrl: './interprete.component.html',
	styleUrls: ['./interprete.component.scss']
})
export class InterpreteComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	title:String = "Operaciones literales | Intérprete";
	arrOperacionesDisponibles:Array<String> = ["Suma", "Resta", "Multiplicacion", "Division"];
	mapOperacion:Map<String, String> = new Map([]);
	resultado:String = "";
	err:boolean = false;
	gestor:Gestor = new Gestor();

	procesarNumeros(numero:any){
		this.mapOperacion.set(numero.target.name, numero.target.value);
	}

	procesarOperacion(tipo:String){
		if(this.mapOperacion.size < 2){
			this.resultado = "No hay suficientes numeros para realizar la operacion";
			this.err = true;
		}else{
			this.mapOperacion.set( "operacion", tipo.toLowerCase() );

			this.resultado = this.gestor.obtenerResultado(this.mapOperacion);
			this.err = false;
		}
	}
}
