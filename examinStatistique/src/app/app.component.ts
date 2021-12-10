import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  covidFrance: Statistique = new Statistique(
    'sfhkjhdflkv95995',
    'covid France',
    '8 Millions'
  );
  covidDecesFrance: Statistique = new Statistique(
    'jhjljcsmskj844455',
    'Décès covid France',
    '120 000'
  );

  tabStat: Statistique[] = [this.covidFrance, this.covidDecesFrance];

  constructor() {
    setTimeout(() => {
      let informatique = new Statistique(
        'sjfbkjvbhlksd541611',
        'informaticiens dans le monde',
        '200 millions'
      );
      this.tabStat.push(informatique);
    }, 3000);
  }
}
