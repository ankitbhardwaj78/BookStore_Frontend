import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ListingService } from '../listing.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  myForm: FormGroup;
  listing;
  constructor(private listingservice: ListingService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.listingservice.singleBookDetail(+(params.get('id')))
        .subscribe(data => {
          this.listing = JSON.parse(data["_body"])
          console.log(this.listing);

        })
    });
    this.myForm = new FormGroup({
      message: new FormControl(null, Validators.required)
    });
  }

  onSubmit(message) {
    console.log("in submit");

  }

}
