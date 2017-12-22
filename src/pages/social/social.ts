import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import twitterFetcher from 'twitter-fetcher';

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {
  tweets: any = [];
  twitterAccounts: any = {
    'San Lorenzo': 'caslabasquet',
    'Weber Bahia': 'bahiabasket',
    'Gimnasia CR': 'gyecr',
    'Boca': 'bocabasquet'
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider
  ) {
    this.userProvider.userData.subscribe(userData => {
      if (userData && userData.storedData && userData.storedData.team !== '') {
        const team = userData.storedData.team;

        const configProfile = {
          customCallback: (tweets) => {
            console.log(tweets);
            this.tweets = tweets;
          },
          profile: { screenName: this.twitterAccounts[team] },
          enableLinks: true,
          showUser: true,
          showTime: true,
          showRetweet: false,
          lang: 'es',
          maxTweets: 30,
          showImages: true,
          showInteraction: false
        };
        twitterFetcher.fetch(configProfile);
      }
    }, err => console.error(err));


  }
}
