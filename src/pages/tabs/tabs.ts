import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { PositionsPage } from '../positions/positions';
import { MatchesPage } from '../matches/matches';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PositionsPage;
  tab3Root = MatchesPage;

  constructor() {

  }
}
