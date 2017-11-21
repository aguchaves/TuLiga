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

  logIn(email, password) {
    this.firebaseProvider.logIn(email, password).then(authData => {
      this._userData.next(authData);
    });
  }

  signUp(email, password) {
    this.firebaseProvider.createAccount(email, password).then(authData => {
      this._userData.next(authData);
    });
  }

  selectTeam(team) {
    this.firebaseProvider.setTeam(this._userData.getValue().uid, team).then(userData => {
      this._userData.next(userData);
    });

  }
}
