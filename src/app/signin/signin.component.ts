import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  myForm: FormGroup;

  constructor(private authService: AuthService) {}

  onSubmit() {
      const user = new User(this.myForm.value.email, this.myForm.value.password);
      this.authService.signin(user)
          .subscribe(
              data => {
                console.log(data["_body"]);
                console.log(data["_body"]["message"]);
                
                  localStorage.setItem('token', data["token"]);
                  localStorage.setItem('userId', data["userId"]);
                  //this.router.navigateByUrl('/');
              },
              error => console.error(error)
          );
      this.myForm.reset();
  }

  ngOnInit() {
      this.myForm = new FormGroup({
          email: new FormControl(null, [
              Validators.required,
              Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
          password: new FormControl(null, Validators.required)
      });
  }
  
  logout(){
    console.log("in logout");
    
    this.authService.logout().subscribe(data =>{
      console.log(data);
      
    })
  }
   
}
