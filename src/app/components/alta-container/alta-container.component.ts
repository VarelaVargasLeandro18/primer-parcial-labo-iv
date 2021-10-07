import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.css']
})
export class AltaContainerComponent implements OnInit {
  @Output() onCrearContainer : EventEmitter<Container> = new EventEmitter<Container>();
  public codigo : string = '';
  public marca : string = '';
  public capacidad : number = 0;
  public success : string = '';
  public error : string = '';


  constructor(
    private service : ContainerService
  ) { }

  ngOnInit(): void {
  }

  guardarContainer() {
    this.success = '';
    this.error = '';

    if ( 
      !this.codigo || !this.marca 
    ) {
      this.error = "FALTAN DATOS!";
      return
    }

    if ( this.capacidad <= 0 ) {
      this.error = "NO PUEDEN HABER VALORES NUMÉRICOS NEGATIVOS";
      return
    }

    const container = new Container (
      this.codigo,
      this.marca,
      this.capacidad      
    );

    this.service.altaContainer( container )
      .then( () => {this.success = "Se ha cargado el Container correctamente!"; this.onCrearContainer.emit(container)} )
      .catch( () => this.error = "Error al cargar el Container." );
  }

}
