import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidatos } from './candidatos';

const API_LIST = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/candidates.json';
const API_DETAIL = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/'; 

@Injectable({ providedIn: 'root' })
export class candidatosService {
  constructor(private http: HttpClient) {}

  getcandidatos(): Observable<Candidatos[]> {
    return this.http.get<Candidatos[]>(API_LIST);
  }

  getcandidato(id: number): Observable<Candidatos> {
    const url = `${API_DETAIL}${id}/candidates.json`;
    return this.http.get<Candidatos>(url);
  }
}
