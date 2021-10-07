import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {
  
  public codigo : string = '';
  public descripcion : string = 'descripcion';
  public precio : number = 0;
  public stock : number = 0;
  public comestible : boolean = false;
  public pais : string = '';
  public success : string = '';
  public error : string = '';

  constructor(
    private service : ProductoService
  ) { }

  elegirPais ( pais : Pais ) {
    this.pais = pais.pais;
  }

  ngOnInit(): void {
  }

  guardarProducto () {
    this.success = '';
    this.error = '';

    if ( 
      !this.codigo || !this.descripcion || this.precio === 0 ||
      this.stock === 0 || !this.pais 
    ) {
      this.error = "FALTAN DATOS!";
    }

    const producto = new Producto (
      this.codigo,
      this.descripcion,
      this.precio,
      this.stock,
      this.pais,
      this.comestible
    );

    this.service.altaProducto( producto )
      .then( () => this.success = "Se ha cargado el producto correctamente!" )
      .catch( () => this.error = "Error al cargar el producto." );
    
  }

}
