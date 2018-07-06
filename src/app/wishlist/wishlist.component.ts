import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: object = [];
  constructor( private route: Router,private wishlistservice: WishlistService) { }

  ngOnInit() {
    this.wishlistservice.getItem()
      .subscribe(data => {
        console.log(data);
        
        this.wishlist = JSON.parse(data["_body"])
      })
      console.log("yo",this.wishlist);
  }

  home(){
    this.route.navigate(['listing']);
  }

}
