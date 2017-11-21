import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { TeamsProvider } from '../../providers/teams-provider';
import { UserProvider } from '../../providers/user-provider';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-select-team',
  templateUrl: 'select-team.html',
})
export class SelectTeamPage {

  teams: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private teamsProvider: TeamsProvider,
    private userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    this.teams = this.teamsProvider.getTeams();

    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err)); // TODO: error handling
  }

  ionViewDidLeave() {

  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      this.navCtrl.push(TabsPage);
    }
  }

  selectTeam(team) {
    this.userProvider.selectTeam(team.club);
  }

}
