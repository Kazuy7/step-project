import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private componentesSelecionadosSource = new BehaviorSubject<any[]>([]);
  componentesSelecionados$ = this.componentesSelecionadosSource.asObservable();

  atualizarComponentesSelecionados(componentesSelecionados: any[]) {
    this.componentesSelecionadosSource.next(componentesSelecionados);
  }

  constructor() { }
}
