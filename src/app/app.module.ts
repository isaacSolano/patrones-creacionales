import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabricaAbstractaComponent } from './fabrica-abstracta/fabrica-abstracta.component';
import { MetodoFabricaComponent } from './metodo-fabrica/metodo-fabrica.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { PrototipoComponent } from './prototipo/prototipo.component';
import { AdaptadorComponent } from './adaptador/adaptador.component';

const routes = [
  {
    path: 'fabricaAbstracta',
    component: FabricaAbstractaComponent
  },
  {
    path: 'metodoFabrica',
    component: MetodoFabricaComponent
  },
  {
    path: 'prototipo',
    component: PrototipoComponent
  },
  {
    path: 'constructor',
    component: ConstructorComponent
  },
  {
    path: 'adaptador',
    component: AdaptadorComponent
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes, {
      anchorScrolling: 'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
