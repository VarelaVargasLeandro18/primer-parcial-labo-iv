import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'bienvenido', component:BienvenidaComponent},
  {path:'altaProducto', component:AltaProductoComponent},
  {path:'productoDetalle', component:ProductoDetalleComponent},
  {path:'', pathMatch:'full', redirectTo:'bienvenido'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
