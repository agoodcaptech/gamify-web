import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActivityComponent} from './activity/activity.component';
import {ChallengeComponent} from './challenge/challenge.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ChartsModule} from 'ng2-charts';
import { LoginComponent } from './login/login.component';
import { NavContainer } from './navbar/nav-container.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuardService} from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    ChallengeComponent,
    HomeComponent,
    LoginComponent,
    NavContainer
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
