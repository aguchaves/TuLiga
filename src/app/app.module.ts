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
import { TabsPage } from "../pages/tabs/tabs"
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsPage } from "../pages/news/news"
import { SettingsPage } from "../pages/settings/settings";
import { TeamPage } from "../pages/team/team";
import { HistoryPage } from "../pages/history/history"

// Providers
import { FirebaseProvider } from '../providers/firebase-provider';
import { UserProvider } from '../providers/user-provider';
import { TeamsProvider } from '../providers/teams-provider';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    PositionsPage,
    MatchesPage,
    HomePage,
    LoginPage,
    SelectTeamPage,
    TabsPage,
    NewsPage,
    SettingsPage,
    TeamPage,
    HistoryPage,
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
    SelectTeamPage,
    TabsPage,
    NewsPage,
    SettingsPage,
    TeamPage,
    HistoryPage,
  ],
  providers: [
    FirebaseProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    TeamsProvider,
    InAppBrowser,
  ]
})
export class AppModule {}
