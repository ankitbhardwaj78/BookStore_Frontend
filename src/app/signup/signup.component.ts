import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }


  onSubmit() {
    const user = new User(
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.name,
      this.myForm.value.college,
      this.myForm.value.address,
      this.myForm.value.phoneNumber
    );
    console.log(user);

    this.authService.signup(user)
      .subscribe(
        data =>{
          console.log(data); 
          this.router.navigateByUrl('/home/signin');
        },
        error => console.error(error)
      );
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      college: new FormControl(null, Validators.required)
    });
  }

}
