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
import { CompositorComponent } from './compositor/compositor.component';
import { CadenaResponsabilidadComponent } from './cadena-responsabilidad/cadena-responsabilidad.component';
import { ComandoComponent } from './comando/comando.component';
import { MediadorComponent } from './mediador/mediador.component';
import { IteradorComponent } from './iterador/iterador.component';
import { ObservadorComponent } from './observador/observador.component';

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
  },
  {
    path: "compositor",
    component: CompositorComponent
  },
  {
    path: "cadenaResponsabilidad",
    component: CadenaResponsabilidadComponent
  },
  {
    path: "comando",
    component: ComandoComponent
  },
  {
    path: "mediador",
    component: MediadorComponent
  },
  {
    path: "iterador",
    component: IteradorComponent
  },
  {
    path: "observador",
    component: ObservadorComponent
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
    CompositorComponent,
    CadenaResponsabilidadComponent,
    ComandoComponent,
    MediadorComponent,
    IteradorComponent,
    ObservadorComponent,
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
