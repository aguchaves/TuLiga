import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider) {

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
      console.log('navigate');
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
      this.userProvider.signUp(this.email, this.password);
    }
  }
}
