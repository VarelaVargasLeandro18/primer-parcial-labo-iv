import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubAPIService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get("https://api.github.com/users/varelavargasleandro18");
  }

}
