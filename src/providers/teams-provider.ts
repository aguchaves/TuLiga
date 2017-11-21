import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { each as _each } from 'lodash';

declare var Promise: any;

@Injectable()
export class TeamsProvider {

  constructor(public http: Http) {}

  getTeams() {
    console.log('getTeams');
    return this.http.get('http://www.laliganacional.com.ar/api/v2/equipos').map(res => {
      let teams = [];

      console.log(res.json());
      _each(res.json().datos.Eficiencia, (team) => {
        teams.push(team);
      });

      return teams;
    });
  }
}
