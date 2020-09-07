import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-iterador',
	templateUrl: './iterador.component.html',
	styleUrls: ['./iterador.component.scss']
})
export class IteradorComponent implements OnInit {

	constructor() { }

	title = "Cola | Iterador";
	arrAcciones = {0: "Primero", 1: "Siguiente", 2: "Anterior", 3: "Ultimo"};
	arrElementos = {0: {nombre: "El00", seleccionado: false}, 1: {nombre: "El01", seleccionado: false}, 2: {nombre: "El02", seleccionado: false}, 3: {nombre: "El03", seleccionado: false}};
	error:String = null;
	gestor:Gestor = new Gestor();

	ngOnInit(): void {
		this.gestor.inicializar(this.arrElementos);
	}

	procesarOpcion(tipo:Number):void{
		switch(Number(tipo)){
			case 0:
				this.procesarResultado( this.gestor.primero() );
				break;

			case 1:
				this.procesarResultado( this.gestor.siguiente() );
				break;

			case 2:
				this.procesarResultado( this.gestor.anterior() );
				break;

			case 3:
				this.procesarResultado( this.gestor.ultimo() );
				break;

			default:
				break;
		}
	}

	procesarResultado(resultado:String){
		if(resultado === null){
			this.error = "No existen mas elementos";

			for(let k of Object.keys(this.arrElementos)){
				this.arrElementos[k]["seleccionado"] = false;
			}
		}else{
			this.error = null;

			for(let k of Object.keys(this.arrElementos)){
				if( Number(k) === Number(resultado.toString().split("_")[0]) ){
					this.arrElementos[k]["seleccionado"] = true;
				}else{
					this.arrElementos[k]["seleccionado"] = false;
				}
			}
		}
	}
}
