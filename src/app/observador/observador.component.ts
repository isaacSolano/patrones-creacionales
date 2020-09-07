import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-observador',
	templateUrl: './observador.component.html',
	styleUrls: ['./observador.component.scss']
})
export class ObservadorComponent implements OnInit {
	constructor() { }

	title:String = "Estados | Observador";
	arrEstados = {0: "Activo", 1: "En revision", 2: "Inactivo", 3: "Reprovado", 4: "Aprovado"};
	gestor:Gestor = new Gestor();
	estadoActual:String = null;
	
	ngOnInit(): void {
		this.gestor.nuevoObjecto();
		this.gestor.nuevoObservador();
	}

	procesarOpcion(tipo:Number):void{
		this.estadoActual = this.gestor.nuevoEstado( this.arrEstados[tipo.toString()] );
	}
}
