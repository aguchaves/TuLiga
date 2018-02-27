import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TabsPage } from '../tabs/tabs';
import { UserProvider } from '../../providers/user-provider';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news: Object = {
    'San Lorenzo': {
      url: 'http://www.laliganacional.com.ar/laliga/club/san-lorenzo/page/noticias'
    },
    'Gimnasia (CR)': {
      url: 'http://www.laliganacional.com.ar/laliga/club/gecr/page/noticias'
    },
    'Boca': {
      url: ''
    }
  };
  team: any = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
    private userProvider: UserProvider
  ) {
  }

  ionViewDidLoad() {
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err));
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      this.team = userData.storedData.team;

      console.log(this.team, this.news);
      const browser = this.iab.create(this.news[this.team], '_self', {
        location: 'no'
      });

      browser.on('loadstop').subscribe(() => {
        console.log('loaded page');

        browser.insertCSS({
          code: '.navbar { display: none; } #clubheader { display: none; } .espacio { display: none }'
        }).then(() => {
          console.log('css added');
          browser.show();
        });
      });

      browser.on('exit').subscribe(() => {
        console.log('closed browser');
        this.navCtrl.push(TabsPage);
      });
    }
  }
}
