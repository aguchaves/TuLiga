import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectTeamPage } from "../select-team/select-team";
import { ReportPage } from "../report/report";
import { UserProvider } from '../../providers/user-provider';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  team: any = '';
  isAdmin: Boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider) {
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err));
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      this.isAdmin = userData.storedData.admin;
      console.log(userData.storedData);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  handleChangeTeam() {
    this.navCtrl.push(SelectTeamPage);
  }

  goToReportPage() {
    this.navCtrl.push(ReportPage);

  }
}
