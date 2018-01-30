import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams-provider';
import { UserProvider } from '../../providers/user-provider';
import _ from 'lodash';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results: Array<Object> = [];
  teamSelected: any;
  nextGames: Array<Object> = [];
  nextGame: any = {
    isLive: false,
  };

  constructor(
    public navCtrl: NavController,
    private teamsProvider: TeamsProvider,
    private userProvider: UserProvider,
  ) {
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err));
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

      this.teamsProvider.getMatches().then(results => {
        this.teamSelected = _.toUpper(userData.storedData.team);

        _.each(_.reverse(results), (teamMatch) => {
          if (
            (teamMatch.local === this.teamSelected || teamMatch.visitante === this.teamSelected)
            && teamMatch.estado === 'SCHEDULED'
            && moment(teamMatch.fecha).isAfter(moment()) ) {
            this.nextGame = teamMatch;
            this.nextGame.isLive = false;
          }
        });

        const gameTime = moment(this.nextGame.fecha);

        if (gameTime.isSameOrAfter(moment()) && (gameTime.hour() <= moment().hour())) {
          this.nextGame.isLive = true;
          document.getElementById("vs").style.display = "none";
        }

      })
    }
  }
}
