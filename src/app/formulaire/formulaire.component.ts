import { Component } from '@angular/core';
import { FormulaireService } from './formulaire.service';
import { DownloadFileRequest } from '../model/model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent {
  constructor(private formulaireService: FormulaireService) {}

  onSubmit(username: string, password: string, host: string, remoteFilePath: string, description: string) {
    const request: DownloadFileRequest = {
      username,
      password,
      host,
      remoteFilePath,
      description
    };

    // Call the downloadLogFile endpoint
    this.formulaireService.downloadLogFile(request).subscribe(response => {
      console.log('Log file downloaded successfully:', response);
    }, error => {
      console.error('Error downloading log file:', error);
    });
  }
}
