import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/Componente';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/componente`

  constructor(private http: HttpClient) { }

  // Define que vamos receber uma resposta que contém um array de registros
  getComponentes(): Observable<Response<Componente[]>> {
    return this.http.get<Response<Componente[]>>(this.apiUrl);
  }

  // Puxando uma Componente individual
  getComponente(id: number): Observable<Response<Componente>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Componente>>(url);
  }

  // Criação do método que recebe dados do formulário(formData) e usa o verbo POST para inserir dados no banco através da API
  createComponente(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  // Chamando o método de edição de dados
  updateComponente(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
