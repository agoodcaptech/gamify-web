import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityComponent} from './activity/activity.component';
import {ChallengeComponent} from './challenge/challenge.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: 'activity',
    component: ActivityComponent
  },
  {
    path: 'challenge',
    component: ChallengeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


