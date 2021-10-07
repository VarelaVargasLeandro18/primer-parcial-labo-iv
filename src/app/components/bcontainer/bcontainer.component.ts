import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-bcontainer',
  templateUrl: './bcontainer.component.html',
  styleUrls: ['./bcontainer.component.css']
})
export class BContainerComponent implements OnInit {
  @Input() container? : Container;
  constructor( private service : ContainerService ) { }

  ngOnInit(): void {
  }

  borrar() {
    this.service.borrarContainer(this.container?.codigo);
  }

}
