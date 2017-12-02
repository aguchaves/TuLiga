import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

// Pages
import { PositionsPage } from '../pages/positions/positions';
import { MatchesPage } from '../pages/matches/matches';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SelectTeamPage } from '../pages/select-team/select-team';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Providers
import { FirebaseProvider } from '../providers/firebase-provider';
import { UserProvider } from '../providers/user-provider';
import { TeamsProvider } from '../providers/teams-provider';

@NgModule({
  declarations: [
    MyApp,
    PositionsPage,
    MatchesPage,
    HomePage,
    LoginPage,
    SelectTeamPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PositionsPage,
    MatchesPage,
    HomePage,
    LoginPage,
    SelectTeamPage
  ],
  providers: [
    FirebaseProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    TeamsProvider
  ]
})
export class AppModule {}
