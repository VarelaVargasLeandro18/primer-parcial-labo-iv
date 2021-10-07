import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() onSeleccionPais : EventEmitter<Pais> = new EventEmitter<Pais>();
  public paises? : Pais[];

  constructor( private service : PaisService ) {
    this.service.getPaises().subscribe( ( paises : any ) => {
      this.paises = paises.slice( 0, 10 );
    } )
  }

  ngOnInit(): void {
  }

  seleccionarPais( pais : Pais ) {
    this.onSeleccionPais.emit(pais);
  }

}
