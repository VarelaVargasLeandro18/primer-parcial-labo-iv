import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  public producto? : Producto;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionProducto(producto : Producto) {
    this.producto = producto;
  }

}
