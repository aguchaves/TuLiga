import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { TeamsProvider } from '../../providers/teams-provider';
import _ from 'lodash';

@Component({
  selector: 'page-contact',
  templateUrl: 'matches.html'
})
export class MatchesPage {
  teamSelected: String;
  matches: Array<Object> = [];

  constructor(
    public navCtrl: NavController,
    private userProvider: UserProvider,
    private teamsProvider: TeamsProvider
  ) {
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err)); // TODO: error handling
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      console.log(this.teamsProvider);
      this.teamsProvider.getMatches().then((results) => {
        this.teamSelected = _.toUpper(userData.storedData.team);

        _.each(results, (team) => {
          if (team.local === this.teamSelected || team.visitante === this.teamSelected) {
            this.matches.push(team);
          }
        });

        console.log(this.matches);
      });
    }
  }

}
