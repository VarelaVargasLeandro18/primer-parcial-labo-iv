import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { Producto } from 'src/app/models/producto';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  public producto? : Producto;
  public pais? : Pais;

  constructor(
    private paisService : PaisService
  ) { }

  ngOnInit(): void {
  }

  seleccionProducto(producto : Producto) {
    this.producto = producto;
    this.paisService.getPaisByName( producto.pais ).subscribe( pais => this.pais = pais[0]);
    
  }

}
