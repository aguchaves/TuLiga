import { Injectable } from '@angular/core';

import  * as FirebaseLib from 'firebase';

declare var Promise: any;

@Injectable()
export class FirebaseProvider {
  app: any = null;
  public auth: any;
  private userData: any;

  private firebaseConfiguration: Object = {
    apiKey: 'AIzaSyDKQ4cozxEpE5AcFmAqX9Alw5eJTwbad0s',
    authDomain: 'tu-equipo-7e1ee.firebaseapp.com',
    databaseURL: 'https://tu-equipo-7e1ee.firebaseio.com',
    projectId: 'tu-equipo-7e1ee',
    storageBucket: '',
    messagingSenderId: '118588843377'
  };

  constructor() {
    this.app = FirebaseLib.initializeApp(this.firebaseConfiguration);

    this.auth = this.app.auth();
  }

  logIn(email, password) {
    console.log('logIn');
    return new Promise((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          this.app.database().ref(`/users/${user.uid}`).once('value',snapshot => {
            if (snapshot.val()) {
              user.storedData = snapshot.val();
            }

            this.userData = user;
            resolve(user);
          });
        })
        .catch(error => {
          console.log('Error on Login ->', error);

          reject(error);
        });
    });
  }

  createAccount(email, password) {
    console.log('createAccount');
    return new Promise((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
          this.userData = user;

          resolve(user);
        })
        .catch(function(error) {
          console.log('Error on Signup ->', error);

          reject(error);
        });
    });
  }

  setTeam(userUid, team) {
    console.log('setTeam', userUid, team);
    return new Promise((resolve, reject) => {
      this.app.database().ref(`/users/${userUid}/team`).set(team).then(() => {
        this.userData.storedData = {};
        this.userData.storedData.team = team;

        resolve(this.userData)
      });
    });
  }
}
