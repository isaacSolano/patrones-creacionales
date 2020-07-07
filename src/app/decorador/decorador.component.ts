import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-decorador',
	templateUrl: './decorador.component.html',
	styleUrls: ['./decorador.component.scss']
})
export class DecoradorComponent implements OnInit {
	constructor() { }
	ngOnInit(): void {
		this.gestor = new Gestor();
	}
	gestor:Gestor;
	title:String = "Creador de personas | Decorador";
	opcionesDisponibles:any = {
		"Persona regular": 1,
		"Persona decorada": 2
	}
	arrInfoPersonasCreadas:Array<Object> = [];

	crearPersona(tipo:Number){
		this.gestor.crearPersona();

		if(tipo === 2){
			this.gestor.decorarPersona(this.arrInfoPersonasCreadas.length);
		}

		this.arrInfoPersonasCreadas = this.gestor.obtenerInfoPersonasCreadas();
	}

	eliminarDecorador(indice:Number){
		this.gestor.quitarDecorador(indice);
		this.arrInfoPersonasCreadas = this.gestor.obtenerInfoPersonasCreadas();
	}

	decorarPersona(indice:Number){
		this.gestor.decorarPersona(indice);
		this.arrInfoPersonasCreadas = this.gestor.obtenerInfoPersonasCreadas();
	}
}