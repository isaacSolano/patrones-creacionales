import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-template',
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	title:String = "Creador de mensajes | Template";
	arrInfoUsuario:Map<String, String> = new Map([]);
	arrOpciones:Map<String, String> = new Map([
		["0", "Facebook"],
		["1", "Twitter"]
	]);
	showOptions:boolean = false;
	mensaje:String = "";
	gestor:Gestor = new Gestor();
	respuesta:String = "";

	registrarUsuario(form:NgForm):void{
		Object.entries(form.value).forEach(each => this.arrInfoUsuario.set( each[0], each[1].toString() ));
		this.showOptions = true;

		this.gestor.login(this.arrInfoUsuario.get("txtUsuario"), this.arrInfoUsuario.get("txtContrasena") );
	}

	guardarMensaje(event:any){
		this.mensaje = event.target.value;
	}

	imprimirMensaje(k:String):void{
		this.gestor.nuevo_mensaje(this.mensaje);
		this.respuesta = this.gestor.publicar(k);
	}
}