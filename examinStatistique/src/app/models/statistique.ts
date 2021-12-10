export class Statistique {
  identifiant: string;
  titre: string;
  valeur: string;

  constructor(identifiant: string, titre: string, valeur: string) {
    this.identifiant = identifiant;
    this.titre = titre;
    this.valeur = valeur;
  }
}
