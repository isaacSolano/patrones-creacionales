import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Gestor } from './Gestor';

@Component({
	selector: 'app-peso-ligero',
	templateUrl: './peso-ligero.component.html',
	styleUrls: ['./peso-ligero.component.scss']
})
export class PesoLigeroComponent implements OnInit {
	constructor() { }
	ngOnInit(): void {
	}
	gPeso_Ligero = new Gestor();
	title = "Taller de vehiculos | Peso Ligero";
	marcaSeleccionada:String;
	modeloSeleccionado:String;
	marcasDisponibles:any = {
		"Nissan": ["Sentra", "Versa", "Tiida"], 
		"Honda": ["Civic", "S2000", "RidgeLine"],
		"Toyota": ["Sienna", "Corolla", "RAV4"]
	};
	vehiculosIngresados:any = [];

	seleccionarMarca(marca:String){
		this.marcaSeleccionada = marca;
	}

	seleccionarModelo(modelo:String){
		this.modeloSeleccionado = modelo;
	}

	registrarVehiculo(form:NgForm){
		this.vehiculosIngresados.push( this.gPeso_Ligero.generar_vehiculo(this.marcaSeleccionada.toLocaleLowerCase(), this.modeloSeleccionado.toLocaleLowerCase(), form.value.txtColor.toLocaleLowerCase(), form.value.nPlaca, form.value.nCedula) );
	}
}