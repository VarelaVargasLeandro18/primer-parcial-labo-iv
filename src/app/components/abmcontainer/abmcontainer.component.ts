import { Container } from "src/app/models/container";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abmcontainer',
  templateUrl: './abmcontainer.component.html',
  styleUrls: ['./abmcontainer.component.css']
})
export class ABMContainerComponent implements OnInit {
  public container? : Container;
  constructor() { }

  ngOnInit(): void {
  }

  onContainerCreado( container : Container ) {
    this.container = container
  }

}
