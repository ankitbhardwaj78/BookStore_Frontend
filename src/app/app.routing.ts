import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { ListingComponent } from "./listing/listing.component";
import { AddlistingComponent } from "./addlisting/addlisting.component";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    {
        path: 'listing', component: ListingComponent, children: [
            { path: 'add', component: AddlistingComponent }
        ]
    }
    // { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);