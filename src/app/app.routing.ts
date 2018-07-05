import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { ListingComponent } from "./listing/listing.component";
import { AddlistingComponent } from "./addlisting/addlisting.component";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { DisplaylistingComponent } from "./displaylisting/displaylisting.component";


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent },
    {
        path: 'listing', component: ListingComponent, children: [
            { path: 'add', component: AddlistingComponent },
            { path: '', component: DisplaylistingComponent }
        ]
    }

];

export const routing = RouterModule.forRoot(APP_ROUTES);