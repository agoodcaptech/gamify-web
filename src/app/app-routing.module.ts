import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityComponent} from './activity/activity.component';
import {ChallengeComponent} from './challenge/challenge.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './auth-guard.service';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'activity',
    component: ActivityComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'challenge',
    component: ChallengeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: '/activity',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


