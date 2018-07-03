import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'angular5-social-login';
// import { FacebookLoginProvider } from 'angular5-social-login';
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title = 'app';
  loggedIn = false;
  name: string;
  pic: string;
  constructor() { }
  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }
  ngOnInit() {

  }

    onSignIn(googleUser) {
this.loggedIn = true;
     console.log('hi');
    const googleAuth = gapi.auth2.getAuthInstance();
    googleUser = googleAuth.currentUser.get();
    console.log(googleUser);

   const profile = googleUser.getBasicProfile();
   this.name = profile.getName();
   this.pic = profile.getImageUrl();

    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  }

}




