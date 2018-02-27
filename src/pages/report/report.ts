import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  teams: Object = {};
  totalUsers: any = 0;
  statistics: Array<Object> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    this.userProvider.getAllUsers().then((users) => {
      this.teams = {};

      _.each(users, (user) => {
        if (this.teams[user.team]) {
          this.teams[user.team] = this.teams[user.team] + 1;
        } else {
          this.teams[user.team] = 1;
        }

        this.totalUsers = this.totalUsers + 1;
      });

      this.statistics = _.map(this.teams, (teamFans, teamName) => {
        console.log(this.totalUsers, teamFans);
        return {
          name: teamName,
          fans: teamFans,
          percentage: (teamFans / this.totalUsers) * 100
        };
      });
    });
  }

}
