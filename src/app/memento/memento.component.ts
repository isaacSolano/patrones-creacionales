import { Component, OnInit } from '@angular/core';
import { Gestor } from './Gestor';

@Component({
	selector: 'app-memento',
	templateUrl: './memento.component.html',
	styleUrls: ['./memento.component.scss']
})

export class MementoComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	title:String = "Creador de borradores | Memento";
	mapTxt:Map<String, Object> = new Map([]);
	gestor:Gestor = new Gestor("", "");
	texto:String = " ";

	procesarTexto(event){
		this.actualizarMap("actual", this.obtenerFechaActual(), event.target.value);
		this.actualizarMap("borrador", this.gestor.obtenerFecha(), this.gestor.obtenerTexto());
	}

	procesarBorrador():void{
		let objTxt:any = this.mapTxt.get("actual");

		if(objTxt !== undefined){
			this.gestor.cambiarTexto(objTxt.txt);
			this.gestor.cambiarFecha(objTxt.fecha);

			this.gestor.actualizarMemento();
			this.actualizarMap("borrador", this.gestor.obtenerFecha(), this.gestor.obtenerTexto());
		}
	}

	retrocederBorrador(){
		this.gestor.retrocederMemento();
		this.actualizarMap("actual", this.gestor.obtenerFecha(), this.gestor.obtenerTexto());
		this.texto = this.gestor.obtenerTexto();
	}

	actualizarMap(key:String, val1:String, val2:String){
		this.mapTxt.set(key, {fecha: val1, txt: val2});
	}

	obtenerFechaActual():String{
		const date = new Date();
		return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} a las ${date.getHours() > 12 ? (date.getHours()-12) : (date.getHours())}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours() > 12 ? "pm" : "am"}`;
	}

}