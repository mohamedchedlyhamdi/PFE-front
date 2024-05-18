import { Component } from '@angular/core';
import { Projet } from './projet/projet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vermegapp1';

  showPopup: boolean = false;
  currentConfigType: string = '';

  projets: Projet[] = [
    { id: 1, nom: 'Projet A', date_entree: '2021-01-01', derniere_analyse: '2021-02-01', description: 'Description A', etat: 'En cours' },
    { id: 2, nom: 'Projet B', date_entree: '2021-03-01', derniere_analyse: '2021-04-01', description: 'Description B', etat: 'Terminé' }
  ];

  openPopup(configType: string) {
    this.currentConfigType = configType;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  configureProjet(projet: Projet, configType: string) {
    console.log('Configuring project:', projet, 'with config type:', configType);
    this.openPopup(configType);
  }
}
