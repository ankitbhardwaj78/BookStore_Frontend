import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: Http) { }

  getMessage(){
    return this.http.get('/api/messages')
  }

  sendMessage(name,message){
    return this.http.post('/api/messages',{name,message})
  }

}
