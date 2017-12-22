import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { SelectTeamPage } from '../select-team/select-team';
import { TabsPage } from '../../pages/tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: String = '';
  password: String = '';
  errorCodes: Object = {
    'auth/email-already-in-use': 'El mail ya esta en uso por otra cuenta'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    public alertCtrl: AlertController,
  ) {

    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err)); // TODO: error handling
  }

  ionViewDidLeave() {
    // TODO: Remove Subscription of userProvider
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team) {
      this.navCtrl.push(TabsPage);
    } else if (userData && userData.uid) {
      this.navCtrl.push(SelectTeamPage);
    }
  }

  handleLogin() {
    if (this.email !== '' && this.password !== '') {
      this.userProvider.logIn(this.email, this.password);
    }
  }

  handleSignUp() {
    if (this.email !== '' && this.password !== '') {
      this.userProvider.signUp(this.email, this.password, this.handleSignUpError.bind(this));
    }
  }

  handleSignUpError(error) {
    const alert = this.alertCtrl.create({
      title: 'Lo sentimos',
      subTitle: this.errorCodes[error.code] || error.message,
      buttons: ['Aceptar']
    });

    alert.present();
    this.password = '';
  }
}
