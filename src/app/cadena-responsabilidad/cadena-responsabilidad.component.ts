import { Component, OnInit } from '@angular/core';
import { Gestor } from '../cadena-responsabilidad/Gestor';

@Component({
	selector: 'app-cadena-responsabilidad',
	templateUrl: './cadena-responsabilidad.component.html',
	styleUrls: ['./cadena-responsabilidad.component.scss']
})

export class CadenaResponsabilidadComponent implements OnInit {

	constructor() { 
		this.gestor = new Gestor();
		this.gestor.IniciarProceso();
	}

	ngOnInit():void{ }

	title = "Linea de Comandos | Cadena de Responsabilidad";
	arrOrdenes = [{
		suj: "Operario",
		orden: "Hacer deposito"
	},
	{
		suj: "Supervisor",
		orden: "Revisar datos"
	},
	{
		suj: "Gerente",
		orden: "Aprobar vacaciones"
	}];
	arrRespuestas = [];
	gestor:Gestor = new Gestor();

	procesarOpcion(orden:any){
		this.gestor.agregarMensaje(orden.suj, orden.orden);
		this.arrRespuestas = this.gestor.ejecutarmensaje();

		console.log(this.arrRespuestas);
	}
}