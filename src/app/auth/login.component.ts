import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { IUser } from './user'

@Component({
  selector: 'gym-login',
  template: require('./login.component.html'),
  styles: [require('./login.component.css').toString()]
})
export class LoginComponent {
  private user: IUser = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {
    
  }

  login() {
    this.auth.login(this.user).subscribe((success) => {
      if (success)
        this.router.navigate(['home']);
    }, (err) => { 
      console.log("Error logging in");
    })
  }
}