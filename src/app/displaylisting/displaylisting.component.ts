import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-displaylisting',
  templateUrl: './displaylisting.component.html',
  styleUrls: ['./displaylisting.component.css']
})
export class DisplaylistingComponent implements OnInit {


  priority: Object = { "New": 3, "Almost new": 2, "Slight damage": 1, "Worn": 0 };

  listings: any[] = [];

  constructor(private listingservice: ListingService) { }

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
      for (let j = i+1; j < this.listings.length ; j++) {
        if (this.priority[this.listings[i].condition] < this.priority[this.listings[j].condition]) {
          let temp = this.listings[j];
          this.listings[j]= this.listings[i];
          this.listings[i] = temp;
        }
       // console.log(this.priority[this.listings[j + 1].condition]);
      }
    }
    console.log(this.listings);
  }

  filter(form,to,condition){
 console.log(form,to,condition);
 
  }

}
