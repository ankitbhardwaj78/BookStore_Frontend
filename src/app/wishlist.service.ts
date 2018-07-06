import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:Http) { }

  addItem(product){
    return this.http.post('/api/wishlists',{product});
  }

  getItem(){
    return this.http.get('/api/wishlists');
  }

}
