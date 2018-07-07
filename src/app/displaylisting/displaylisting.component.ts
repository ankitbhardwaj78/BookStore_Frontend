import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { query } from '@angular/core/src/render3/query';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-displaylisting',
  templateUrl: './displaylisting.component.html',
  styleUrls: ['./displaylisting.component.css']
})
export class DisplaylistingComponent implements OnInit {


  priority: Object = { "New": 3, "Almost new": 2, "Slight damage": 1, "Worn": 0 };

  listings: any[] = [];

  constructor(private listingservice: ListingService,
    private router: ActivatedRoute,
    private route: Router,
    private wishlistservice: WishlistService) { }

  ngOnInit() {
    this.listingservice.getlisting()
      .subscribe(data => {
        console.log(data["_body"]);
        this.listings = JSON.parse(data["_body"])
        console.log(this.listings);
      })
  }

  sortbyprice() {
    console.log("in sort");

    this.listings.sort(function (x, y) {
      return Number(x.price) - Number(y.price);
    })
    console.log(this.listings);
  }

  sortByCondition() {
    //console.log(this.priority["New"]);
    for (let i = 0; i < this.listings.length; i++) {
      for (let j = i + 1; j < this.listings.length; j++) {
        if (this.priority[this.listings[i].condition] < this.priority[this.listings[j].condition]) {
          let temp = this.listings[j];
          this.listings[j] = this.listings[i];
          this.listings[i] = temp;
        }
        // console.log(this.priority[this.listings[j + 1].condition]);
      }
    }
    console.log(this.listings);
  }

  filterByCondition(condition) {
    this.listingservice.filterByCondition(condition)
      .subscribe(data => {
        console.log(data);
        this.listings = JSON.parse(data["_body"])
      })
  }

  filterByPrice(from, to) {
    this.listingservice.filterByPrice(from, to)
      .subscribe(data => {
        console.log(JSON.parse(data["_body"]));
        this.listings = JSON.parse(data["_body"])
      })
  }


  search(query) {
    this.listingservice.search(query)
      .subscribe(data => {
        console.log(data);

        this.listings = JSON.parse(data["_body"])
      })

  }

  bookdetail(id) {
    console.log(id);

    this.route.navigate(['listing', id]);
  }

  addToWishlist(book) {
    this.wishlistservice.addItem(book)
      .subscribe(data => {
        alert("Added To Your Wishlist successfully");
      },
      error=>{
        alert("Cannot Be Addded To your wishlist");
      }
    )

  }

}
