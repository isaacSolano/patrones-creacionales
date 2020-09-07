import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-mediador',
	templateUrl: './mediador.component.html',
	styleUrls: ['./mediador.component.scss']
})
export class MediadorComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	title = "Ejecutador de acciones | Mediador";
	arrAcciones = {1: "Boton hola", 2: "Boton adios", 3: "Boton borrar", 4: "Cuadro texto"};
	arrResultados = [];
	gestor:Gestor = new Gestor();

	procesarOpcion(id:any){
		this.gestor.initProcess();
		
		switch ( Number(id) ) {
			case 1:
				this.gestor.ejecutarHola();
				break;

			case 2:
				this.gestor.ejecutarAdios();
				break;

			case 3:
				this.gestor.ejecutarBorrar();
				break;

			case 4:
				this.arrResultados.push( this.gestor.ejecutarTexto() );
				break;
		}
	}
}