import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent }
    // { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);