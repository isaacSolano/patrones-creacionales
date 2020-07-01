import { Component, OnInit } from "@angular/core";

import { Gestor } from "./Gestor";

@Component({
	selector: "app-adaptador",
	templateUrl: "./adaptador.component.html",
	styleUrls: ["./adaptador.component.scss"]
})
export class AdaptadorComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
	}

	title:String = "Creador de motores | Adaptador";
	motoresDisponibles:any = {
		"Motor comun": 1,
		"Motor economico": 2,
		"Motor electrico adaptado": 3,
		"Motor plasma adaptado": 4
	}
	infoMotoresCreados:Array<Object> = [];
	gestor:Gestor = new Gestor();

	procesarOpcion(tipo:Number){
		switch(tipo){
			case 1:
				this.gestor.crearMotorComun();
				break;

			case 2:
				this.gestor.crearMotorEconomico();
				break;

			case 3:
				this.gestor.crearAdaptadorElectrico();
				break;

			case 4:
				this.gestor.crearAdaptadorPlasma();
				break;

			default:
				// code block
				break;
		}

		this.infoMotoresCreados = this.gestor.obtenerInfoMotoresCreados();
	}
}
