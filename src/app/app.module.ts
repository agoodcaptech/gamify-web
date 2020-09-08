import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ActivityComponent} from './activity/activity.component';
import {ChallengeComponent} from './challenge/challenge.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    ChallengeComponent,
    HomeComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ChartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
