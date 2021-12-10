import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-affiche-une-statistique',
  templateUrl: './affiche-une-statistique.component.html',
  styleUrls: ['./affiche-une-statistique.component.css'],
})
export class AfficheUneStatistiqueComponent implements OnInit {
  @Input() public stat!: Statistique;
  constructor() {}

  ngOnInit(): void {}
}
