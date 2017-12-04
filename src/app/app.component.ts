import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from "../providers/user-provider";

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from "../pages/settings/settings";
import { NewsPage } from "../pages/news/news";
import { TeamPage } from "../pages/team/team";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  pages: any = {
    'SettingsPage': SettingsPage,
    'NewsPage': NewsPage,
    'TeamPage': TeamPage,
    'TabsPage': TabsPage,
  };

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private userProvider: UserProvider
  ) {
    this.userProvider.isLoggedIn().then((user) => {
      if (user) {
        this.rootPage = TabsPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  navigateToPage(pageName) {
    console.log(this.pages);
    this.rootPage = this.pages[pageName];
  }
}
