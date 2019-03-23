import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { EnrollComponent } from './enroll/enroll.component';
import { TodaybdayComponent } from './todaybday/todaybday.component';
import { ComposeGreetComponent } from './compose-greet/compose-greet.component';
import { ConfigComponent } from './config/config.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePickerComponent } from './comp/date-picker/date-picker.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'

var fireBase_Config = {
  apiKey: "AIzaSyBpBy5C2vd5ToB6dCqj1kcAEtKnRaR6Zzg",
  authDomain: "birthdayrem-pv.firebaseapp.com",
  databaseURL: "https://birthdayrem-pv.firebaseio.com",
  projectId: "birthdayrem-pv",
  storageBucket: "birthdayrem-pv.appspot.com",
  messagingSenderId: "945686400131"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,

    LoginComponent,
    EnrollComponent,
    TodaybdayComponent,
    ComposeGreetComponent,
    ConfigComponent,
    NavbarComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule, RouterModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(fireBase_Config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
