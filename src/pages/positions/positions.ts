import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';

@Component({
  selector: 'page-about',
  templateUrl: 'positions.html'
})
export class PositionsPage {

  constructor(
    public navCtrl: NavController,
    private userProvider: UserProvider,
  ) {
    this.userProvider.userData.subscribe(userData => {
      this.handleResults(userData);
    }, err => console.error(err)); // TODO: error handling
  }

  handleResults(userData) {
    if (userData && userData.storedData && userData.storedData.team !== '') {

    }
  }

}
