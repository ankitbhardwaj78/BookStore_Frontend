import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: Http) { }

  addlisting(formdata){
    console.log("in add");
    
    return this.http.post('/api/listings/add',formdata);
  }
}
