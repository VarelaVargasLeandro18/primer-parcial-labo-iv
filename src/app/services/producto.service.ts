import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';
import { LABM } from './labm';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private db : LABM;
  private collection : string = "Primer-Parcial-Productos";

  constructor(
    private firestore : AngularFirestore
  ) { 
    this.db = new LABM( this.firestore.collection<Producto>( this.collection ) );
  }

  altaProducto ( producto : Producto ) {
    return this.db.alta(producto);
  }
  
  leer () {
    return this.db.leer().pipe( 
      map( snapshots => snapshots.docs.map( doc => new Producto( 
                                                                doc.data().codigo,
                                                                doc.data().descripcion, 
                                                                doc.data().precio,
                                                                doc.data().stock,
                                                                doc.data().pais,
                                                                doc.data().comestible
                                                                ) ) )
    )
  }

}
