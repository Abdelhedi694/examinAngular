import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../services/statistique.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-creation-statistique',
  templateUrl: './creation-statistique.component.html',
  styleUrls: ['./creation-statistique.component.css'],
})
export class CreationStatistiqueComponent implements OnInit {
  id!: string;
  titre!: string;
  valeur!: string;
  constructor(public tab: StatistiqueService) {}

  soumissionForm() {
    let statFormulaire = new Statistique(this.id, this.titre, this.valeur);
    this.tab.tableauStatistique.push(statFormulaire);
    this.id = '';
    this.titre = '';
    this.valeur = '';
  }

  ngOnInit(): void {}
}
