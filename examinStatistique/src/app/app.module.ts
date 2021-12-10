import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficheUneStatistiqueComponent } from './affiche-une-statistique/affiche-une-statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficheUneStatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
