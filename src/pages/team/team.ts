import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');

    const browser = this.iab.create('http://www.laliganacional.com.ar/laliga/club/san-lorenzo/page/equipo','_self', {
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
      this.navCtrl.push(TabsPage);
    });
  }
}

