import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollComponent } from './enroll/enroll.component';
import { TodaybdayComponent } from './todaybday/todaybday.component';
import { ComposeGreetComponent } from './compose-greet/compose-greet.component';
import { ConfigComponent } from './config/config.component';
import { RouterModule } from '@angular/router';
import { bdayRoutes } from './bday.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuradService } from '../guards/auth-gurad.service';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    EnrollComponent,
    TodaybdayComponent,
    ComposeGreetComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(bdayRoutes)
  ],
  providers: [AuthGuradService]
})
export class BdayModule { }
