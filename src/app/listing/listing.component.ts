import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListingService } from '../listing.service';
import { Listing } from '../listing.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  listings: any[] = [];

  constructor(private router: ActivatedRoute, private route: Router, private listingservice: ListingService, private auth: AuthService) { }

  ngOnInit() {

    this.auth.isloggedin()
      .subscribe(data => {
        if (!JSON.parse(data["_body"]).done) {
          this.route.navigate(['']);
        }
      })

    this.listingservice.getlisting()
      .subscribe(data => {
        console.log(data["_body"]);
        this.listings = JSON.parse(data["_body"])
        console.log(this.listings);

      })
  }

  addListingPage() {
    console.log("working");
    this.route.navigate(['add'], { relativeTo: this.router });
  }

  displayListingPage() {

    this.route.navigate(['listing']);
  }

  logout() {
    this.auth.logout()
      .subscribe(data => {
        this.route.navigate(['']);
      })
  }

}
