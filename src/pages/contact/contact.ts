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
      text1: 'Teléfono: ⁠⁠⁠5263-4600\n',
      text2: 'Mail: infolaplata@sanlorenzo.com.ar\n',
      text3: 'Horarios de Atención: Lun. a Vier. de 8 a 21:30. Sáb. de 9 a 19:30.'
    },
    'Gimnasia (CR)': {
      text1: 'Teléfono: (0297) 406-9090\n',
      text2: 'Mail: gimnasia.esgrima@comodoro.coop\n',
      text3: 'Dirección: Sáenz Peña 764, Comodoro Rivadavia.\n',
      img: 'https://static.wixstatic.com/media/796e23_d2a1aeaa6f704ac0b99977ac95dce53b~mv2.jpeg/v1/fill/w_933,h_406,al_c,q_85,usm_0.66_1.00_0.01/796e23_d2a1aeaa6f704ac0b99977ac95dce53b~mv2.webp'
    },
    'Boca': {
      text1: 'Teléfono: (011) 4309-4633\n',
      text2: 'Mail: basquetprofesional@bocajuniors.com.ar\n',
      text3: 'Dirección: Arzobispo Espinosa 600, Ciudad de Buenos Aires\n',
      img: 'https://3.bp.blogspot.com/-Ii3Zs2lTODw/WJJmF0ldxGI/AAAAAAAAYbY/haTr27Bsvscg-QQLzm2FohlNsSQNhykPgCLcB/s640/bombonerita03.jpg'
    }
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
