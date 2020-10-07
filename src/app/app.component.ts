import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})

export class AppComponent {
	title = "Patrones de diseño";

	arrPatronesCreacionales:Map<String, String> = new Map([
		["Fabrica Abstracta", "/fabricaAbstracta"],
		["Metodo Fabrica", "/metodoFabrica"],
		["Constructor", "/constructor"],
		["Prototipo", "/prototipo"],
		["Singleton", "/singleton"]
	]);
	arrPatronesEstructurales:Map<String, String> = new Map([
		["Adaptador", "/adaptador"],
		["Fachada", "/fachada"],
		["Peso Ligero", "/peso-ligero"],
		["Decorador", "/decorador"],
		["Puente", "/puente"],
		["Compositor", "/compositor"],
		["Proxy", "/proxy"]

	]);
	arrPatronesComportamiento:Map<String, String> = new Map([
		["Cadena de Responsabilidad", "/cadenaResponsabilidad"],
		["Comando", "/comando"],
		["Mediador", "/mediador"],
		["Iterador", "/iterador"],
		["Observador", "/observador"],
		["Visitante", "/visitante"],
		["Interprete", "/interprete"],
		["Memento", "/memento"],
		["Estrategia", "/estrategia"],
		["Estado", "/estado"],
		["Template", "/template"]
	]);
}