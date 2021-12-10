import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficheUneStatistiqueComponent } from './affiche-une-statistique/affiche-une-statistique.component';
import { AffichageStatistiquesComponent } from './affichage-statistiques/affichage-statistiques.component';
import { CreationStatistiqueComponent } from './creation-statistique/creation-statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficheUneStatistiqueComponent,
    AffichageStatistiquesComponent,
    CreationStatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
