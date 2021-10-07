import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/models/container';
import { ContainerService } from 'src/app/services/container.service';

@Component({
  selector: 'app-mcontainer',
  templateUrl: './mcontainer.component.html',
  styleUrls: ['./mcontainer.component.css']
})
export class MContainerComponent implements OnInit {
  @Input() container? : Container;
  constructor( private service : ContainerService ) { }

  ngOnInit(): void {
  }

  modificar() {
    this.service.modificarContainer(this.container);
  }

}
