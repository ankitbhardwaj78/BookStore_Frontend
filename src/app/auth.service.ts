import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  signup(user:User) {
    return this.http.post('/api/users',user)
  }
  
  signin(user:User){
    return this.http.post('/api/users/signin',user)
  }
}
