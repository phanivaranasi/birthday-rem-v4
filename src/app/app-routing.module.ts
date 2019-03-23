import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TodaybdayComponent } from './todaybday/todaybday.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ConfigComponent } from './config/config.component';
import { ComposeGreetComponent } from './compose-greet/compose-greet.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:"full"
  }
  ,
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'enroll',
    component:EnrollComponent
  },
  {
    path:'today',
    component:TodaybdayComponent
  },
  {
    path:'compose',
    component:ComposeGreetComponent
  },
  {
    path:'config',
    component:ConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
