import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  teams: Object = {
    'San Lorenzo': {
      text: '\n' +
      'Teléfono: ⁠⁠⁠5263-4600\n' +
      'Correo electrónico: infolaplata@sanlorenzo.com.ar\n' +
      'Horarios de Atención: Lun. a Vier. de 8 a 21:30. Sáb. de 9 a 19:30.'
    },
  };
  team: any = '';
  info: String = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider) {
  }

  ionViewWillEnter() {
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err));
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      this.team = userData.storedData.team;

      this.info = this.teams[this.team];
    }
  }

}
