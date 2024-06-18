import { Component } from '@angular/core';

interface Employee {
  photo: string;
  name: string;
  role: string;
  department: string;
  employmentType: string;
  joined: string;
  status: boolean;
}

interface Projet {
  id: number;
  nom: string;
  date_entree: string;
  derniere_analyse: string;
  description: string;
  etat: string;
}

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

  employees: Employee[] = [
    {
      photo: 'path/to/photo1.jpg',
      name: 'Amal Sakly',
      role: 'Employé',
      department: 'Development',
      employmentType: 'Full Time',
      joined: '14-05-2022',
      status: true
    },
    {
      photo: 'path/to/photo2.jpg',
      name: 'Eya Gueddes',
      role: 'Employé',
      department: 'Development',
      employmentType: 'Full Time',
      joined: '09-05-2022',
      status: true
    },
    {
      photo: 'path/to/photo3.jpg',
      name: 'Ala Chérif',
      role: 'Employé',
      department: 'Data science',
      employmentType: 'Full Time',
      joined: '09-05-2022',
      status: true
    },
    {
      photo: 'path/to/photo4.jpg',
      name: 'Mariem Kolli',
      role: 'Employé',
      department: 'Data science',
      employmentType: 'Full Time',
      joined: '17-02-2022',
      status: true
    },
    {
      photo: 'path/to/photo5.jpg',
      name: 'Souha Chouikh',
      role: 'Employé',
      department: 'Development',
      employmentType: 'Full Time',
      joined: '01-02-2022',
      status: true
    }
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
