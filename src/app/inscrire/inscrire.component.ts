import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.scss']
})
export class InscrireComponent implements OnInit {
  employes = [
    { nom: 'Amal Sakly', role: 'Employé', departement: 'Développement', typeEmploi: 'Temps Plein', dateEntree: '14-05-2022' },
    { nom: 'Eya Gueddes', role: 'Employé', departement: 'Développement', typeEmploi: 'Temps Plein', dateEntree: '09-05-2022' },
    { nom: 'Ala Chérif', role: 'Employé', departement: 'Data science', typeEmploi: 'Temps Plein', dateEntree: '09-05-2022' },
    { nom: 'Mariem Kolli', role: 'Employé', departement: 'Data science', typeEmploi: 'Temps Plein', dateEntree: '17-02-2022' },
    { nom: 'Souha Chouikh', role: 'Employé', departement: 'Développement', typeEmploi: 'Temps Plein', dateEntree: '01-02-2022' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
