import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { each as _each } from 'lodash';

declare var Promise: any;

@Injectable()
export class TeamsProvider {
  positions: any;
  results: any;
  matches: any;

  constructor(public http: Http) {}

  getTeams() {
    return this.http.get('http://www.laliganacional.com.ar/api/v2/equipos').map(res => {
      let teams = [];

      _each(res.json().datos.Eficiencia, (team) => {
        teams.push(team);
      });

      return teams;
    });
  }

  getResults() {
    return new Promise((resolve) => {
      this.http.get('http://www.laliganacional.com.ar/api/v2/resultados')
        .map(res => res.json())
        .subscribe(data => {
          this.results = data.datos;

          resolve(this.results);
        });
    })
  }

  getPositions() {
    return new Promise((resolve) => {
      this.http.get('http://www.laliganacional.com.ar/api/v2/posiciones')
        .map(res => res.json())
        .subscribe(data => {
          this.positions = data.datos;

          resolve(this.positions);
        });
    })
  }

  getMatches() {
    return new Promise((resolve) => {
      this.http.get('http://www.laliganacional.com.ar/api/v2/partidos')
        .map(res => res.json())
        .subscribe(data => {
          this.matches = data.datos;

          resolve(this.matches);
        });
    })
  }
}
