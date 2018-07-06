import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { ListingComponent } from "./listing/listing.component";
import { AddlistingComponent } from "./addlisting/addlisting.component";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";
import { DisplaylistingComponent } from "./displaylisting/displaylisting.component";
import { BookdetailComponent } from "./bookdetail/bookdetail.component";
import { MessageComponent } from "./message/message.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { MainpageComponent } from "./mainpage/mainpage.component";


const APP_ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent },
            { path: '', component: MainpageComponent },
        ]
    },

    {
        path: '', component: ListingComponent, children: [
            { path: 'listing/add', component: AddlistingComponent },
            { path: 'listing', component: DisplaylistingComponent },
            { path: 'listing/:id', component: BookdetailComponent },
            { path: 'messages', component: MessageComponent },
            { path: 'wishlist', component: WishlistComponent }
        ]
    },
    { path: 'listing/:id', component: BookdetailComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);