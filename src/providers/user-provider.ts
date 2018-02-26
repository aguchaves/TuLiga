import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { FirebaseProvider } from "./firebase-provider";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserProvider {
  private _userData: BehaviorSubject<any>;

  constructor(private firebaseProvider: FirebaseProvider) {
    this._userData = new BehaviorSubject(null);
  }

  get userData(): BehaviorSubject<any> {
    return this._userData;
  }

  logIn(email, password, onError) {
    this.firebaseProvider.logIn(email, password)
      .then(authData => this._userData.next(authData))
      .catch(error => onError(error));
  }

  signUp(email, password, onError) {
    this.firebaseProvider.createAccount(email, password)
      .then(authData => this._userData.next(authData))
      .catch((error) => onError(error));
  }

  selectTeam(team, logo) {
    this.firebaseProvider.setTeam(this._userData.getValue().uid, team, logo).then(userData => {
      this._userData.next(userData);
    });
  }

  isLoggedIn() {
    return new Promise(resolve => {
      this.firebaseProvider.isUserLoggedIn().then(userData => {
        this._userData.next(userData);
        resolve();
      });
    });
  }

  logOut() {
    return this.firebaseProvider.logOut();
  }
}
