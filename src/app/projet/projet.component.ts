import { Component } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent {
  // Déclaration d'un tableau de projets (à remplir avec vos données)
  projets: any[] = [
    { id: 1, nom: 'Projet 1', date_entree: '2024-04-19', derniere_analyse: '2024-04-19', description: 'Description du projet 1', etat: 'En cours' },
    { id: 2, nom: 'Projet 2', date_entree: '2024-04-20', derniere_analyse: '2024-04-20', description: 'Description du projet 2', etat: 'Terminé' },
    // Ajoutez d'autres projets ici si nécessaire
  ];

  // Fonction pour gérer le clic sur le bouton "Config"
  configureProjet(projet: any) {
    console.log('Configurer le projet :', projet);
    // Ajoutez votre logique de configuration du projet ici
  }
}
  