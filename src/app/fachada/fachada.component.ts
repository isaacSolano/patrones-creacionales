import { Component, OnInit } from "@angular/core";
import { Fachada } from "./Fachada/Clases/Fachada";

@Component({
	selector: "app-fachada",
	templateUrl: "./fachada.component.html",
	styleUrls: ["./fachada.component.scss"]
})
export class FachadaComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
	}

	title:String = "Maquina de cafe | Fachada";
	cafesDisponibles:any = {
		"Negro": 1,
		"Con leche": 2,
		"Espresso": 3,
		"Capuccino": 4
	};
	arrCafesServidos:Array<String> = [];
	fachada:Fachada = new Fachada();

	procesarOpcion(tipo:Number){
		this.arrCafesServidos.push( this.fachada.procesarOpcion(tipo) );
	}
}
