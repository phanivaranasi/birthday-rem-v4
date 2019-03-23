import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  gitProvider = new firebase.auth.GithubAuthProvider;
  fbProvider = new firebase.auth.FacebookAuthProvider;
  gProvider = new firebase.auth.GoogleAuthProvider;
  constructor(private authService: AuthUserService, private router: Router) { }
  _user: any = {};
  ngOnInit() {

  }
  authUser = () => {
    console.log("Auther user", this._user);
    this.authService.login(this._user.Email, this._user.Password)
  }
  fbAuth = (e) => {
    console.log("fb");
    this.providerAuth(this.fbProvider);
  }
  githubAuth = (e) => {
    this.providerAuth(this.gitProvider);
  }
  gAuth = (e) => {
    console.log("gp");
    this.providerAuth(this.gProvider);
  }
  providerAuth = (provider: any) => {
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        console.log("provider resut", result);
      })
      .catch(function (error) {
        console.log("provider err", error);
      });
    console.log("provide");
  }
}
