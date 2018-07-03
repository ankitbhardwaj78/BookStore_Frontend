import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private router: ActivatedRoute,private route: Router) { }

  ngOnInit() {
  }

  addlisting() {
    console.log("working");
    
    this.route.navigate(['add'], { relativeTo: this.router});
 }

}
