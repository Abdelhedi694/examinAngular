import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
    this.tableauStatistique.push(this.covidFrance, this.covidDecesFrance);

    this.recupDonnees();
  }

  recupDonnees(): Promise<boolean> {
    return this.http
      .get('https://stats.naminilamy.fr')
      .toPromise()
      .then(
        (data) => {
          for (const ligne of data as any) {
            this.tableauStatistique.push(
              new Statistique(ligne.id, ligne.title, ligne.value)
            );
          }
          return true;
        },
        (err) => {
          //Si code status différent de 2XX, on l'aura ici
          //Par exemple, si le login ou le mdp est incorrect, on aura un status 401
          console.log(err.status);
          return false;
        }
      );
  }
}
