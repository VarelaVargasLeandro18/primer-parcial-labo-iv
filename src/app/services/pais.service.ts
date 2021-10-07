import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  getPaises() {
    return this.http.get("https://restcountries.com/v3.1/all?fields=name,flags").pipe( 
      map( (paises : any) => paises.map( ( pais : any ) => new Pais( pais.name.common, pais.flags.png ) ) ) 
    )
  }

  getPaisByName(name: string) {
    return this.http.get("https://restcountries.com/v3.1/name/"+name+"?fields=name,flags")
  }
  
}
