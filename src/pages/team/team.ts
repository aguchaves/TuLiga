import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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

    const browser = this.iab.create('http://www.laliganacional.com.ar/laliga/club/san-lorenzo/page/equipo');

    browser.show();
  }
}

