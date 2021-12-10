import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageStatistiquesComponent } from './affichage-statistiques/affichage-statistiques.component';
import { CreationStatistiqueComponent } from './creation-statistique/creation-statistique.component';

const routes: Routes = [
  { path: 'affichageStat', component: AffichageStatistiquesComponent },
  { path: 'creationStat', component: CreationStatistiqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
