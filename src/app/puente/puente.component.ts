import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-puente',
	templateUrl: './puente.component.html',
	styleUrls: ['./puente.component.scss']
})
export class PuenteComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { 
		this.gestor = new Gestor();
	}
	title:String = "Creador de figuras | Puente";
	gestor:Gestor;
	arrFigurasDisponibles:Array<String> = ["Circulo", "Rectangulo", "Triangulo", "Rombo"];
	arrInfoFigurasCreadas:Array<String> = [];

	crearFigura(tipo:String){
		this.gestor.crearFigura(tipo);

		this.obtenerInfoFigurasCreadas();
	}

	cambiarColor(indice:any){
		this.gestor.cambiarColor(indice);

		this.obtenerInfoFigurasCreadas();
	}

	obtenerInfoFigurasCreadas(){
		this.arrInfoFigurasCreadas = this.gestor.obtenerInfoFigurasCreadas();
	}
}
