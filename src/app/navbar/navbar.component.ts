import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../services/auth-user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthUserService) { }
  user: User;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log("navbar", this.user);
  }

  logout = (e) => {
    this.authService.logout();
  }
}
