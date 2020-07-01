import { Component, OnInit } from "@angular/core";
import { Helper } from "./Helper";
import { Gestor } from "./Gestor";

@Component({
  selector: "app-metodo-fabrica",
  templateUrl: "./metodo-fabrica.component.html",
  styleUrls: ["./metodo-fabrica.component.scss"]
})
export class MetodoFabricaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  crearTriangulo:Helper = new Helper();
	gestor:Gestor = new Gestor();

	title = "Fabrica de triangulos | Metodo Fabrica";
	triangulosDisponibles = {
		Equilatero: [2, 2, 2],
		Isoceles: [2, 4, 2],
		Escaleno: [2, 4, 5],
		Azar: this.crearTriangulo.alAzar()
	}

	procesarOpcion(arr:Array<Number>):void{
		this.gestor.nuevoTriangulo(arr);

		// permitir volver a calcular un triangulo al azar
		this.triangulosDisponibles.Azar = this.crearTriangulo.alAzar();
	}

	obtenerInfoTriangulos(){
		return this.gestor.obtenerTriangulos();
	}
}
