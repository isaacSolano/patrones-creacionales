import { Component, OnInit } from '@angular/core';

import { Gestor } from "./Gestor";

@Component({
  selector: 'app-prototipo',
  templateUrl: './prototipo.component.html',
  styleUrls: ['./prototipo.component.scss']
})
export class PrototipoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Creador de camisetas | Prototipo';
	gestor:Gestor;
	arrCamisetasCreadas:Array<Object> = [];
	arrPrototipos:Array<Object> = [];

	crearCamisetas(){
		let id_mangacorta:Number = 100,
			id_mangalarga:Number = 200;

		this.gestor = new Gestor(id_mangacorta, id_mangalarga);

		this.arrPrototipos = this.gestor.getPrototipos();

		for(let i = 0; i<10; i++){
			this.gestor.nueva_camisa(i);
		}

		this.arrCamisetasCreadas = this.gestor.getClones();
	}

}
