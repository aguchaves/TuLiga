import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { TeamsProvider } from '../../providers/teams-provider';
import _ from 'lodash';

@Component({
  selector: 'page-positions',
  templateUrl: 'positions.html'
})
export class PositionsPage {
  positions: Array<Object> = [];
  teamSelected: String;

  constructor(
    public navCtrl: NavController,
    private userProvider: UserProvider,
    private teamsProvider: TeamsProvider,
  ) {
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err)); // TODO: error handling
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {
      this.teamsProvider.getPositions().then((results) => {
        this.teamSelected = _.toUpper(userData.storedData.team);

        this.positions = results;
        console.log(this.positions);
      });
    }
  }

}
