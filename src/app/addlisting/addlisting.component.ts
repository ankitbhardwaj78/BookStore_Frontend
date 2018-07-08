import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListingService } from '../listing.service';
import { Listing } from '../listing.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {
  myForm: FormGroup;
  condition = ['New', 'Almost new','Slight Damage' ,'Worn']
  selectedFile: File = null;
  fd = new FormData();


  constructor(private listingservice: ListingService, private route: Router,
    private auth: AuthService) { }

  onSubmit() {
    this.fd.append('bookname',this.myForm.value.bookname)
    this.fd.append('authorname',this.myForm.value.authorname)
    this.fd.append('price',this.myForm.value.price)
    this.fd.append('condition',this.myForm.value.condition)
   
      this.listingservice.addlisting(this.fd).subscribe(data=>{
        alert("Listing added Successfully");
      })
      this.myForm.reset();
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.fd.append('bookimage', this.selectedFile, this.selectedFile.name);

  }

  ngOnInit() {
    this.auth.isloggedin()
    .subscribe(data => {
      if (!JSON.parse(data["_body"]).done) {
        alert("please login to continue")
        this.route.navigate(['/home']);
      }
    })
    this.myForm = new FormGroup({
      bookname: new FormControl(null, Validators.required),
      authorname: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      condition: new FormControl(null, Validators.required)
    });
  }
}
