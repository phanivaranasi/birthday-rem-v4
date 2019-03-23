import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollComponent } from './enroll/enroll.component';
import { TodaybdayComponent } from './todaybday/todaybday.component';
import { ComposeGreetComponent } from './compose-greet/compose-greet.component';
import { ConfigComponent } from './config/config.component';
import { AuthGuradService } from '../guards/auth-gurad.service';



export const bdayRoutes: Routes = [
    {
        path: 'dashboard',
        component: HomeComponent,
        canActivate:[AuthGuradService],
        children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            { path: 'home', component: DashboardComponent },
            { path: 'enroll', component: EnrollComponent },
            { path: 'today', component: TodaybdayComponent },
            { path: 'compose', component: ComposeGreetComponent },
            { path: 'config', component: ConfigComponent }
        ]
    }
]