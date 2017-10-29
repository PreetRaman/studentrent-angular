import { Component } from '@angular/core';
import {AuthService} from "../providers/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  public error: any;
  constructor(private authService: AuthService, private router: Router) { }
  register(event, name, email, password) {
    event.preventDefault();
    this.authService.registerUser(email, password).then((user) => {
      this.authService.saveUserInfoFromForm(user.uid, name, email).then(() => {
        this.router.navigate(['']);
      })
        .catch((error) => {
          this.error = error;
        });
    })
      .catch((error) => {
        this.error = error;
        console.log(this.error);
      });
  }
}
