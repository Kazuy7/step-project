import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from '../interfaces/School';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/school`

  constructor(private http: HttpClient) { }

  // Define que vamos receber uma resposta que contém um array de registros
  getSchools(): Observable<Response<School[]>> {
    return this.http.get<Response<School[]>>(this.apiUrl); 
  }

  // Puxando uma school individual
  getSchool(id: number): Observable<Response<School>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<School>>(url); 
  }

  // Criação do método que recebe dados do formulário(formData) e usa o verbo POST para inserir dados no banco através da API
  createSchool(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  // Chamando o método de edição de dados
  updateSchool(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData); 
  }
}
