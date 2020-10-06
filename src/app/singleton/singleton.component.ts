import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-singleton',
	templateUrl: './singleton.component.html',
	styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	title:String = "Almacen de conexiones | Singleton";
	gestor:Gestor = new Gestor();
	arrConexionActiva:Map<String, String> = new Map([ ["Url: ", "Vacio"], ["Nombre de la base de datos: ", "Vacio"]]);

	registrarConexion(form:NgForm):void{
		this.gestor.crearConexion(form.value.txtUrl, form.value.txtNombre);
		this.actualizarValores();
	}

	desconectarse():void{
		this.gestor.desconectarse();
		this.actualizarValores();
	}

	actualizarValores():void{
		this.arrConexionActiva.set("Url: ", this.gestor.obtenerUrl());
		this.arrConexionActiva.set("Nombre de la base de datos: ", this.gestor.obtenerNombre());
	}
}