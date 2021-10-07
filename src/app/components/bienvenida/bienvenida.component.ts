import { Component, OnInit } from '@angular/core';
import { GithubAPIService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  
  public imagenUrl? : string;
  public nombre? : string;
  public link? : string;

  constructor(
    private gh : GithubAPIService
  ) { 
    this.gh.get().subscribe( (usr : any) => {
        this.imagenUrl = usr.avatar_url;
        this.nombre = usr.login;
        this.link = usr.html_url;
      }
    );
  }

  ngOnInit(): void {
  }

}
