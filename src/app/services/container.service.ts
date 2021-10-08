import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Container } from '../models/container';
import { LABM } from './labm';
import { collection, query, where } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  
  private db : LABM;
  private collection : string = "Primer-Parcial-Containers";

  constructor(
    private firestore : AngularFirestore
  ) { 
    this.db = new LABM( this.firestore.collection<Container>( this.collection ) );
  }

  altaContainer ( Container : Container ) {
    return this.db.alta(Container);
  }

  leer () {
    return this.db.leer().pipe( 
      map( snapshots => snapshots.docs.map( doc => doc.data() as Container ) )
    )
  }

  borrarContainer( codigo? : string ) {
    return this.firestore.collection<Container>(this.collection).ref.where( 'codigo', '==', codigo ).get().then( data => data.forEach( doc => doc.ref.delete() ) );
  }

  modificarContainer( container? : Container ) {
    if ( !container ) return;
    return this.firestore.collection<Container>(this.collection).ref.where( 'codigo', '==', container.codigo ).get().then( data => data.forEach( doc => doc.ref.update({...container}) ) );
  }

}
