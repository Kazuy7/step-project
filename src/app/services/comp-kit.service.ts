import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompKit } from '../interfaces/Comp-Kit';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class CompKitService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/compkit`

  constructor(private http: HttpClient) { }

  // Define que vamos receber uma resposta que contém um array de registros
  getCompKits(): Observable<Response<CompKit[]>> {
    return this.http.get<Response<CompKit[]>>(this.apiUrl);
  }

  // Puxando uma Kit individual
  getCompKit(id: number): Observable<Response<CompKit>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<CompKit>>(url);
  }

  // Criação do método que recebe dados do formulário(formData) e usa o verbo POST para inserir dados no banco através da API
  createCompKit(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  // Chamando o método de edição de dados
  updateCompKit(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
