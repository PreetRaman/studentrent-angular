import { Component } from '@angular/core';
import { AuthService } from "./providers/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;

  constructor(public authService: AuthService, private router: Router) {
    // This asynchronously checks if our user is logged in and will automatically
    // redirect them to the Login page when the status changes.

    this.authService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
        else {
          console.log("Successfully Logged in.");
          // Set the Display Name and Email
          if(auth.google) {
            this.authService.displayName = auth.google.displayName;
            this.authService.email = auth.google.email;
          }
          else {
            this.authService.displayName = auth.auth.email;
            this.authService.email = auth.auth.email;
          }
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
  }

  logout() {
    this.authService.logout();
  }
}
