import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { DomSanitizer } from '@angular/platform-browser';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  stores: Object = {
    'Gimnasia CR': 'https://www.gyestore.com.ar/',
    'Obras': 'http://www.obras-store.com/',
    'Boca': 'https://www.bocashop.com.ar/',
    'Instituto': 'http://www.institutoacc.com.ar/index.php/tienda-online/',
  };
  url: String = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    public sanitizer: DomSanitizer,
    public alertCtrl: AlertController,
  ) {}

  ionViewWillEnter() {
    console.log('ionViewDidLoad');
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err));
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      const team = userData.storedData.team;

      console.log('selected team', team);

      if (this.stores[team]) {
        this.url = this.stores[team];
      } else {
        const alert = this.alertCtrl.create({
          title: 'Lo sentimos',
          subTitle: 'Tu club todavia no dispone de una tienda oficial',
          buttons: [{
            text: 'Aceptar',
            handler: () => {
              this.navCtrl.push(TabsPage);
            }
          }]
        });

        alert.present();
      }
    }
  }
}
