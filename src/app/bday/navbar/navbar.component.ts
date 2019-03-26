import { Component, OnInit } from '@angular/core';

import { User } from 'firebase';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthUserService, private router: Router) { }
  user: User;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log("navbar", this.user);
    
  }

  logout = (e) => {
    this.authService.logout().then(res => {
      this.router.navigate(["login"]);
    })
  }
}
