import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../interfaces/Register';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/registers`

  constructor(private http: HttpClient) { }

  // Define que vamos receber uma resposta que contém um array de registros
  getRegisters(): Observable<Response<Register[]>> {
    return this.http.get<Response<Register[]>>(this.apiUrl); 
  }

  // Criação do método que recebe dados do formulário(formData) e usa o verbo POST para inserir dados no banco através da API
  createRegister(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
