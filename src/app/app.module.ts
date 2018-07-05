import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { HttpModule } from "@angular/http";
import { ListingComponent } from './listing/listing.component';
import { AddlistingComponent } from './addlisting/addlisting.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { DisplaylistingComponent } from './displaylisting/displaylisting.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ListingComponent,
    AddlistingComponent,
    HomeComponent,
    DisplaylistingComponent,
    BookdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
