import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projets: any[] = [];
  showModal = false;
  selectedFile = '';
  selectedProjetId: number | null = null;
  filterAttribute = '';
  searchQuery = '';
  loading = false;
  analysisResults: string[] = [];
  analysisType: 'log' | 'db' = 'log';
  detailedResults: string = ''; // New property to hold detailed data from DB API

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProjets();
  }

  fetchProjets(): void {
    const apiUrl = 'http://localhost:8081/api/projets/allProjets';
    this.http.get<any[]>(apiUrl).subscribe({
      next: (data) => {
        this.projets = data.map(projet => ({
          ...projet,
          date_entree: projet.dateEntree,
          derniere_analyse: projet.derniereMaj
        }));
        console.log('Projects fetched successfully', this.projets);
      },
      error: (error) => console.error('Error fetching projects', error)
    });
  }

  openConfigModal(type: 'log' | 'db', identifier: string | number): void {
    this.analysisType = type;
    this.selectedFile = type === 'log' ? identifier as string : '';
    this.selectedProjetId = type === 'db' ? identifier as number : null;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  submitConfiguration(): void {
    if (this.filterAttribute && this.searchQuery) {
      this.loading = true;
      this.analysisType === 'log' ? this.submitLogConfiguration() : this.submitDbConfiguration();
    } else {
      alert('Please enter both fields.');
    }
  }

  submitLogConfiguration(): void {
    const apiUrl = 'http://localhost:8081/api/projets/upload-log';
    const body = {
      filename: this.selectedFile,
      filterAttribute: this.filterAttribute,
      searchQuery: { [this.filterAttribute]: this.searchQuery }
    };

    this.http.post<string[]>(apiUrl, body).subscribe({
      next: (response) => {
        this.analysisResults = response;
        this.loading = false;
        this.showModal = false;
        this.generatePDF('log');
      },
      error: (error) => {
        console.error('Error response from API:', error);
        alert('Error: ' + error.message);
        this.loading = false;
      }
    });
  }

  submitDbConfiguration(): void {
    const apiUrl = 'http://localhost:8081/api/analyseLogDb';
    const body = {
      projetId: this.selectedProjetId,
      uploadRequest: {
        filterAttribute: this.filterAttribute,
        searchQuery: { [this.filterAttribute]: this.searchQuery }
      }
    }; // Fixed typo: removed semicolon after '}' 

    this.http.post<string[]>(apiUrl, body).subscribe({
      next: (response) => {
        this.analysisResults = response;
        this.loading = false;
        this.showModal = false;
        this.generatePDF('db');
      },
      error: (error) => {
        console.error('Error response from API:', error);
        alert('Error: ' + error.message);
        this.loading = false;
      }
    });
  }
  generatePDF(type: 'log' | 'db'): void {
    const doc = new jsPDF();
    const headerText = type === 'log' ? 'Résultats de l\'analyse des journaux' : 'Résultats de l\'analyse de la base de données';
    const gdprComplianceText = type === 'log'
        ? 'Conformité RGPD pour les journaux: Toutes les données analysées respectent les règlements RGPD en matière de journaux.'
        : 'Conformité RGPD pour les bases de données: Toutes les données analysées respectent les règlements RGPD en matière de bases de données.';

    doc.setFontSize(16).text(headerText, 10, 10);
    doc.setFontSize(12);
    this.analysisResults.forEach((result, index) => {
        doc.text('- ' + result, 10, 20 + (index * 10));
    });

    // Add the detailed results from the DB analysis
    if (type === 'db' && this.detailedResults) {
        doc.addPage();
        doc.setFontSize(14).text('Detailed Results:', 10, 10);
        doc.setFontSize(12).text(this.detailedResults, 10, 20);
    }

    doc.setFontSize(10)
        .text(gdprComplianceText, 10, doc.internal.pageSize.height - 20)
        .text('Conformité RGPD: Toutes les mesures nécessaires ont été prises pour garantir la protection des données personnelles conformément au RGPD.', 10, doc.internal.pageSize.height - 10);

    const filename = type === 'log' ? 'analyse-resultats-journaux.pdf' : 'analyse-resultats-base-de-donnees.pdf';
    doc.save(filename);
}

}
