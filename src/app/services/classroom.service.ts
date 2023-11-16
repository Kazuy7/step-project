import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classroom } from '../interfaces/Classroom';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/classroom`

  constructor(private http: HttpClient) { }

  // Define que vamos receber uma resposta que contém um array de registros
  getClassrooms(): Observable<Response<Classroom[]>> {
    return this.http.get<Response<Classroom[]>>(this.apiUrl); 
  }

  // Puxando uma Classroom individual
  getClassroom(id: number): Observable<Response<Classroom>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Classroom>>(url); 
  }

  // Criação do método que recebe dados do formulário(formData) e usa o verbo POST para inserir dados no banco através da API
  createClassroom(formData: FormData): Observable<FormData> {
    // const url = `${this.apiUrl}/`
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
