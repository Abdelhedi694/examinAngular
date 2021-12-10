import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatistiqueService {
  tableauStatistique: Statistique[] = [];
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

  constructor() {
    this.tableauStatistique.push(this.covidFrance, this.covidDecesFrance);
  }
}
