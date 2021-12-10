import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';
import { StatistiqueService } from '../services/statistique.service';

@Component({
  selector: 'app-affiche-une-statistique',
  templateUrl: './affiche-une-statistique.component.html',
  styleUrls: ['./affiche-une-statistique.component.css'],
})
export class AfficheUneStatistiqueComponent implements OnInit {
  @Input() public stat!: Statistique;
  @Output() public supp = new EventEmitter();
  tabStat: Statistique[] = [];
  constructor(public tab: StatistiqueService) {}

  reagirAuBouton() {
    this.supp.emit();
  }

  ngOnInit(): void {}
}
