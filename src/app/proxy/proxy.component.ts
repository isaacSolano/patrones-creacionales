import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-proxy',
	templateUrl: './proxy.component.html',
	styleUrls: ['./proxy.component.scss']
})
export class ProxyComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }
	arrAccesos:Map<Number, String> = new Map([
		[0, "Profesor"],
		[1, "Asistente"],
		[2, "Estudiante"]
	]);
	gestor:Gestor = new Gestor();
	tituloFinal:String = "";
	subtituloFinal:String = "";
	cuerpoFinal:String = "";

	title:String = "Filtro de accesos | Proxy";
	procesarAcceso(tipo:Number):void{
		let mensajeFinal:String = this.gestor.accederDocumento(tipo);
		
		this.tituloFinal = mensajeFinal.split(`\n`)[0];
		this.subtituloFinal = mensajeFinal.split(`\n`)[1];
		this.cuerpoFinal = mensajeFinal.split(`\n`)[2];
	}
}
