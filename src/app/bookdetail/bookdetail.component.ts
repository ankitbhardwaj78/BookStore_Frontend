import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ListingService } from '../listing.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { WishlistService } from '../wishlist.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  
  myForm: FormGroup;
  listing: object = {};

  constructor(private listingservice: ListingService,
    private router: ActivatedRoute,
    private messageService: MessageService,
    private route: Router,
    private auth: AuthService,
    private wishlistservice: WishlistService) { }


  ngOnInit() {
    this.auth.isloggedin()
    .subscribe(data => {
      if (!JSON.parse(data["_body"]).done) {
        alert("please login to continue")
        this.route.navigate(['/home']);
      }
    })

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
    this.messageService.sendMessage(this.listing["sellerName"], this.listing["userId"],message)
      .subscribe(data => {
        alert("Message Sent SuccessFully");
      },
      error=>{
        alert("message Cant Be sent");
      }
    )
    this.myForm.reset();
  }


  addToWishlist() {
    this.wishlistservice.addItem(this.listing)
      .subscribe(data => {
        alert("Added To Your Wishlist successfully");
      },
      error=>{
        alert("cannot be added to your wishlist");
      }
    )

  }

}
