import { Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { LoginComponent } from './components/regular/login/login.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { FacultyHomeComponent } from './components/regular/facultyCoordinators/faculty-home/faculty-home.component';
import { VenueInchargeHomeComponent } from './components/regular/venueIncharges/venue-incharge-home/venue-incharge-home.component';
import { ChangePasswordComponent } from './components/regular/change-password/change-password.component';
import { BookVenueComponent } from './components/regular/facultyCoordinators/book-venue/book-venue.component';
export const routes: Routes = [
    {path:"",component:SplashScreenComponent},
    {path:"login",component:LoginComponent},
    {path:"admin",component:AdminLoginComponent},
    {path:"admin/home",component:AdminHomeComponent},
    {path:"logout",redirectTo:"/"},
    {path:"faculty/home",component:FacultyHomeComponent},
    {path:"venueIncharge/home",component:VenueInchargeHomeComponent},
    {path:"changePassword",component:ChangePasswordComponent},
    {path:"faculty/book-venue",component:BookVenueComponent}
];
