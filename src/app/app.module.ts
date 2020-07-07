import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FabricaAbstractaComponent } from "./fabrica-abstracta/fabrica-abstracta.component";
import { MetodoFabricaComponent } from "./metodo-fabrica/metodo-fabrica.component";
import { ConstructorComponent } from "./constructor/constructor.component";
import { PrototipoComponent } from "./prototipo/prototipo.component";
import { AdaptadorComponent } from "./adaptador/adaptador.component";
import { FachadaComponent } from "./fachada/fachada.component";
import { PesoLigeroComponent } from './peso-ligero/peso-ligero.component';
import { DecoradorComponent } from './decorador/decorador.component';
import { PuenteComponent } from './puente/puente.component';

const routes = [
  {
    path: "fabricaAbstracta",
    component: FabricaAbstractaComponent
  },
  {
    path: "metodoFabrica",
    component: MetodoFabricaComponent
  },
  {
    path: "prototipo",
    component: PrototipoComponent
  },
  {
    path: "constructor",
    component: ConstructorComponent
  },
  {
    path: "adaptador",
    component: AdaptadorComponent
  },
  {
    path: "fachada",
    component: FachadaComponent
  },
  {
    path: "peso-ligero",
    component: PesoLigeroComponent
  },
  {
    path: "decorador",
    component: DecoradorComponent
  },
  {
    path: "puente",
    component: PuenteComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FabricaAbstractaComponent,
    MetodoFabricaComponent,
    ConstructorComponent,
    PrototipoComponent,
    AdaptadorComponent,
    FachadaComponent,
    PesoLigeroComponent,
    DecoradorComponent,
    PuenteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
