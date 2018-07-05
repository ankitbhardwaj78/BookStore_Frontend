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

  getlisting(){
    return this.http.get('/api/listings');
  }

  filterByCondition(condition){
    return this.http.post('/api/listings/filterByCondition',{condition});
  }

  filterByPrice(from,to){
    return this.http.post('/api/listings/filterByPrice',{from,to});
  }
  
  search(query){
    return this.http.post('/api/listings/search',{query});
  }

}
