import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: string = '';

  constructor() { }

  // Chamando a menssagem de concluído e sumindo após 3 segundos
  add(message:string) {
    this.message = message

    setTimeout(() => {
      this.clear();
    }, 5000);
  }

  clear() {
    this.message = '';
  }
  
}
