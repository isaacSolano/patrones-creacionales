import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-visitante',
	templateUrl: './visitante.component.html',
	styleUrls: ['./visitante.component.scss']
})
export class VisitanteComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	title:String = "Creador de personajes | Visitante";
	arrPersonajes = {0: "Mago", 1: "Guerrero"};
	arrPersonajesCreados:Array<any> = [];
	gestor:Gestor = new Gestor();

	crearPersonaje(key:Number):void{
		this.gestor.agregarPersonaje(key);

		this.arrPersonajesCreados = this.gestor.obtenerPersonajes();
	}

	equipar(){
		this.gestor.equiparPersonaje();
		this.arrPersonajesCreados = this.gestor.obtenerPersonajes();
	}
}
