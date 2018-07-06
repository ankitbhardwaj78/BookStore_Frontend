import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ListingService } from '../listing.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  myForm: FormGroup;
  listing:object={};
  constructor(private listingservice: ListingService, private router: ActivatedRoute,private messageService:MessageService) { }

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
   this.messageService.sendMessage(this.listing["sellerName"],message)
   .subscribe(data=>{
     console.log(data);
   })
  }

}
