import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // acessando API como objeto porque está sendo exportada como objeto
  private baseApiUrl = environment.baseApiUrl;

  // é necessario criar a apiUrl porque teremos urls diferentes em services diferentes
  private apiUrl = `${this.baseApiUrl}api/users`;

  // para fazer a requisição
  constructor(private http: HttpClient) {} 

  // recebendo conteúdo do formData e tipando ele como FormData
  createUser(formData: FormData): Observable<FormData> { 
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}