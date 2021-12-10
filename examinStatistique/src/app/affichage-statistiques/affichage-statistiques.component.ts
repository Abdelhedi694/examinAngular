import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../services/statistique.service';

@Component({
  selector: 'app-affichage-statistiques',
  templateUrl: './affichage-statistiques.component.html',
  styleUrls: ['./affichage-statistiques.component.css'],
})
export class AffichageStatistiquesComponent implements OnInit {
  tab: Statistique[] = [];
  constructor(public stat: StatistiqueService) {
    this.tab = stat.tableauStatistique;
  }

  supprimer(stat: Statistique) {
    let index = this.tab.indexOf(stat);
    this.tab.splice(index, 1);
  }

  ngOnInit(): void {}
}
