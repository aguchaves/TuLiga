import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams-provider';
import { UserProvider } from '../../providers/user-provider';
import _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results: Array<Object> = [];
  teamSelected: any;

  constructor(
    public navCtrl: NavController,
    private teamsProvider: TeamsProvider,
    private userProvider: UserProvider,
  ) {
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err)); // TODO: error handling
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      this.teamsProvider.getResults().then((results) => {
        this.teamSelected = _.toUpper(userData.storedData.team);

        _.each(results, (team) => {
          if (team.local === this.teamSelected || team.visitante === this.teamSelected) {
            this.results.push(team);
          }
        });
      });
    }
  }
}
