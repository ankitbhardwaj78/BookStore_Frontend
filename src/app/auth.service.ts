import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  signup(user) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/users', body, { headers: headers })

  }

}
