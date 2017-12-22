import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  stories: Object = {
    'San Lorenzo': {
      text: 'El equipo profesional masculino de básquet del Club Atlético San Lorenzo de Almagro es originario de la Ciudad de Buenos Aires y actualmente juega en la máxima categoría del básquetbol argentino, la Liga Nacional de Básquet (LNB). En el periodo 1942-1973 destacó por lo hecho a nivel amateur y semi-amateur, en el que consiguió 29 títulos a nivel regional, ganó el Campeonato Argentino de Clubes y fue subcampeón sudamericano en 1958. Además, fue uno de los clubes fundadores de la LNB y jugó el partido inaugural de dicho torneo el 26 de abril de 1985. En 2016, a 31 años de su primera participación, fue campeón de la LNB tras vencer a La Unión de Formosa en las finales. En la temporada 2016-17 se consagró como el mejor bicampeón de la LNB con una efectividad del 88,4 %. San Lorenzo es además el primer y único equipo del básquet argentino que enfrentó a un equipo de la NBA, en 2016.1​'
    },
  };
  team: any = '';
  story: String = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad');
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err));
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      this.team = userData.storedData.team;

      this.story = this.stories[this.team];
    }
  }
}
