import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';
import { AltaContainerComponent } from './components/alta-container/alta-container.component';
import { ABMContainerComponent } from './components/abmcontainer/abmcontainer.component';
import { MContainerComponent } from './components/mcontainer/mcontainer.component';
import { BContainerComponent } from './components/bcontainer/bcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    BienvenidaComponent,
    TablaPaisesComponent,
    AltaProductoComponent,
    ListadoProductosComponent,
    ProductoComponent,
    ProductoDetalleComponent,
    PaisDetalleComponent,
    AltaContainerComponent,
    ABMContainerComponent,
    MContainerComponent,
    BContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
