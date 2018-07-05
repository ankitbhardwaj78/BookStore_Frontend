import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-displaylisting',
  templateUrl: './displaylisting.component.html',
  styleUrls: ['./displaylisting.component.css']
})
export class DisplaylistingComponent implements OnInit {

  
  listings:any[] =[];

  constructor(private listingservice: ListingService) { }

  ngOnInit() {
    this.listingservice.getlisting()
    .subscribe(data => {
      console.log(data["_body"]);
      this.listings = JSON.parse(data["_body"])   
      console.log(this.listings);      
    })
  }

  sortbyprice(){
    console.log("in sort");
    
    this.listings.sort(function(x, y){
      return Number(x.price) - Number(y.price);
    })
    console.log(this.listings);
    
    
  }

}
