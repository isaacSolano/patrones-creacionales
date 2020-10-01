import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-estado',
	templateUrl: './estado.component.html',
	styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	gestor:Gestor = new Gestor();
	title:String = "Detector de alertas | Estado";
	arrAlertas:Map<String, Number> = new Map([
		["Estandar", 0],
		["Precaucion", 1],
		["Emergencia", 2]
	]);
	alertaActual:String = "";

	procesarAlerta(tipo:Number):void{
		this.alertaActual = this.gestor.cambiar_estado(tipo);
	}
	
}