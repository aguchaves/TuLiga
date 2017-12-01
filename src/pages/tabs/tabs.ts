import { Component } from '@angular/core';

import { PositionsPage } from '../positions/positions';
import { MatchesPage } from '../matches/matches';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PositionsPage;
  tab3Root = MatchesPage;

  constructor() {

  }
}
