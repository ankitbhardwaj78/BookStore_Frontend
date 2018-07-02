import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListingService } from '../listing.service';
import { Listing } from '../listing.model';

@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {
  myForm: FormGroup;
  condition = ['new', 'almost new', 'not good']
  selectedFile: File = null;

  constructor(private listingservice: ListingService) { }

  onSubmit() {
    //this.listingservide.addlisting()
    const formData = new FormData();
    console.log(this.selectedFile);
    
    formData.append('photo', this.selectedFile);
    console.log(formData);
    
    const listing = new Listing(
      this.myForm.value.bookname,
      this.myForm.value.authorname,
      this.myForm.value.price,
      this.selectedFile,
      this.myForm.value.condition)
     
      this.listingservice.addlisting(listing).subscribe(data=>{
        console.log(data);
        
      })

  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

  }

  ngOnInit() {
    this.myForm = new FormGroup({
      bookname: new FormControl(null, Validators.required),
      authorname: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      condition: new FormControl(null, Validators.required)
    });
  }
}
