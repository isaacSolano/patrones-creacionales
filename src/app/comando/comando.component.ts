import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-comando',
	templateUrl: './comando.component.html',
	styleUrls: ['./comando.component.scss']
})
export class ComandoComponent implements OnInit {

	constructor() { 
		this.gestor.iniciar();
	 }

	ngOnInit(): void { }

	title = "Linea de productos | Comando";
	arrProductos = [{item: "Celular", precio: 100, id: 1}, {item: "Tablet", precio: 150, id: 2}, {item: "Computadora", precio: 300, id: 3}];
	arrEstado = []
	gestor:Gestor = new Gestor();
	 
	procesarOpcion(nId:Number){
		let objeto:any = this.arrProductos.find( ({id}) => id === nId );
		this.gestor.ejecutar( objeto.id, objeto.item, objeto.precio );
		this.arrEstado = this.gestor.getEstado();
	}
}
