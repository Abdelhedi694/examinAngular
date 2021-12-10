import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './services/statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabStat: Statistique[] = [];

  constructor(public tabServ: StatistiqueService) {
    this.tabStat = tabServ.tableauStatistique;
  }

  supprimer(maStat: Statistique) {
    let index = this.tabStat.indexOf(maStat);
    this.tabStat.splice(index, 1);
  }
}
