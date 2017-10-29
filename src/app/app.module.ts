import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthService} from "./providers/auth.service";
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AngularFireModule} from 'angularfire2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { ListingComponent } from './listing/listing.component';
import { ListingsComponent } from './listings/listings.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAMkkg8xgViSpPxYBuRUGiDGJjiJV0oS00",
  authDomain: "studierent.firebaseapp.com",
  databaseURL: "https://studierent.firebaseio.com",
  storageBucket: "studierent.appspot.com",
  messagingSenderId: "739464213055"
};

const routes: Routes = [
  {path:'home', component:HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent},
  { path: '', component: DashboardComponent },
  { path: 'add-listing', component: AddListingComponent},
  { path: 'listing/:id', component: ListingComponent},
  { path: 'listings', component: ListingsComponent},

];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent, LoginPageComponent, RegistrationPageComponent, HomePageComponent, DashboardComponent, AddListingComponent, ListingComponent, ListingsComponent ],
  bootstrap: [ AppComponent ],
  providers: [AuthService]
})
export class AppModule {}
