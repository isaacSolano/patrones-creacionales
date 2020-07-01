import { Component, OnInit } from "@angular/core";
import { Gestor } from "./Gestor";

@Component({
	selector: "app-constructor",
	templateUrl: "./constructor.component.html",
	styleUrls: ["./constructor.component.scss"]
})
export class ConstructorComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	title = "Fabrica de Carros | Constructor";
	carrosDisponibles:any = {
		"1": "Economico",
		"2": "Estandar",
		"3": "Full Extras"
	};
	arrCarrosCreados:any = [];
	gestor:Gestor = new Gestor();
	
	procesarOpcion(tipoCarro:String):void{
		switch (tipoCarro){
			case "1":
				this.gestor.construccionEconomico();
				break;

			case "2":
				this.gestor.construccionEstandar();
				break;

			case "3":
				this.gestor.construccionFullExtras();
				break;
		}
		this.arrCarrosCreados = this.gestor.obtenerDatos();
	}
}
