import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DownloadFileRequest } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
  private baseUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  // Endpoint to download log file
  downloadLogFile(request: DownloadFileRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/downloadLogFile`, request);
  }
}
