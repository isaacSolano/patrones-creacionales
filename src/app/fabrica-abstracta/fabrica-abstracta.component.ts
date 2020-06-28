import { Component, OnInit } from '@angular/core';

import { Vehiculo } from "./Factory/Producto_Abstracto/Vehiculo";
import { Fabrica_Abstracta } from "./Factory/Fabrica_Abstracta/Fabrica_Abstracta";

import { Fabrica_Taxi } from "./Factory/Fabrica_Concreta/Fabrica_Taxi";
import { Fabrica_Bus } from "./Factory/Fabrica_Concreta/Fabrica_Bus";
import { Fabrica_Uber } from "./Factory/Fabrica_Concreta/Fabrica_Uber";
import { Fabrica_Avion } from "./Factory/Fabrica_Concreta/Fabrica_Avion";

@Component({
  selector: 'app-fabrica-abstracta',
  templateUrl: './fabrica-abstracta.component.html',
  styleUrls: ['./fabrica-abstracta.component.scss']
})
export class FabricaAbstractaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title:String = 'Creador de Vehiculos | Fabrica Abstracta';
  sMensaje:String;
  transportes:any = ['Taxi', 'Bus', 'Uber', 'Avion'];
  vehiculosCreados:Vehiculo[] = [];


  crearFabricaVehiculo(pFbVehiculo:Fabrica_Abstracta){
    let objVehiculo:Vehiculo = pFbVehiculo.crearVehiculo();
  
    this.vehiculosCreados.push(objVehiculo);
  
    return objVehiculo.obtenerInfo();
  }
  
  procesarOpcion(tipo:String):void{
    switch(tipo){
      case "taxi":
        let fbTaxi = new Fabrica_Taxi();
        this.sMensaje = this.crearFabricaVehiculo(fbTaxi);
        break;
  
      case "bus":
        let fbBus = new Fabrica_Bus();
        this.sMensaje = this.crearFabricaVehiculo(fbBus);
        break;
  
      case "uber":
        let fbUber = new Fabrica_Uber();
        this.sMensaje = this.crearFabricaVehiculo(fbUber);
        break;
  
      case "avion":
        let fbAvion = new Fabrica_Avion();
        this.sMensaje = this.crearFabricaVehiculo(fbAvion);
        break;
      }
    }
}
