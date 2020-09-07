import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-compositor',
	templateUrl: './compositor.component.html',
	styleUrls: ['./compositor.component.scss']
})
export class CompositorComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	title:String = "Creador de salarios | Compositor";
	arrInfoEmpleadosCreados:any = [];
	gestor:Gestor = new Gestor();

	registrarEmpleado(form:NgForm){
		this.gestor.nuevoEmpleado(form.value.txtNombre, form.value.nSalario);
	
		this.obtenerInfoEmpleados();
	}

	obtenerInfoEmpleados(){
		this.arrInfoEmpleadosCreados = this.gestor.obtenerEmpleadosCreados();
	}
}