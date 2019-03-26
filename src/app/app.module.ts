import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BdayModule } from './bday/bday.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { BdayService } from './bday/services/bday';
import { AngularFirestore } from '@angular/fire/firestore';

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
    LoginComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BdayModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(fireBase_Config),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
