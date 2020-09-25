import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gestor } from './Estrategia/Gestor';

@Component({
	selector: 'app-estrategia',
	templateUrl: './estrategia.component.html',
	styleUrls: ['./estrategia.component.scss']
})
export class EstrategiaComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	title:String = "Creador de figuras | Estrategia";
	gestor:Gestor = new Gestor();
	error:String = "";
	resultado:String = "";

	procesarDatos(form:NgForm):void{
		try{
			this.resultado = this.gestor.calcularArea(form.value);
			this.error = "";
		}catch(err){
			this.resultado = "";
            this.error = (<Error>err).message;
		}
	}
}