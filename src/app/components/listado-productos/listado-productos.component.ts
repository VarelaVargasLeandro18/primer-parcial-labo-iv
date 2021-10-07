import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  @Output() public onSeleccionarProducto : EventEmitter<Producto> = new EventEmitter<Producto>();
  public Productoes? : Producto[];

  constructor(
    private service : ProductoService
  ) { 
    this.service.leer().subscribe( Productoes => this.Productoes = Productoes );
  }

  ngOnInit(): void {
  }

  onElegirProducto( Producto : Producto ) {
    this.onSeleccionarProducto.emit(Producto);
  }

}
