import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  gitProvider = new firebase.auth.GithubAuthProvider;
  fbProvider = new firebase.auth.FacebookAuthProvider;
  gProvider = new firebase.auth.GoogleAuthProvider;
  constructor(private afAuth: AngularFireAuth, private authService: AuthUserService, private router: Router) { }
  _user: any = {};
  ngOnInit() {

  }
  authUser = () => {
    console.log("Auther user", this._user);
    this.authService.login(this._user.Email, this._user.Password).then(res => {
      this.router.navigate(["dashboard"]);
    })
      .catch(err => {

      })
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
    this.providerAuth(this.gProvider).then(res => {
      console.log('err');
    })
      .catch(err => {
        console.log(err);
      })
  }
  providerAuth = (provider: any) => {
    return firebase.auth().signInWithPopup(provider);
  }
}
