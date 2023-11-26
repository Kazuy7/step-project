import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';
import { ComponenteService } from 'src/app/services/componente.service';
import { Componente } from 'src/app/interfaces/Componente';

@Component({
  selector: 'app-new-componente',
  templateUrl: './new-componente.component.html',
  styleUrls: ['./new-componente.component.css']
})
export class NewComponenteComponent {
  btnText = 'Criar';

  constructor(
    private componenteService: ComponenteService,
    private messagesService: MessagesService, 
    private router:Router
    ) {}

  ngOnInit(): void {}

  async createHandler(componente: Componente) {
    const formData = new FormData();

    formData.append("nome", componente.nome);
    formData.append("descricao", componente.descricao);
    formData.append("valor", componente.valor);

    // enviar para o service
    await this.componenteService.createComponente(formData).subscribe();

    // exibir msg
    this.messagesService.add("Componente criado com sucesso!")

    // redirect
    this.router.navigate(['/'])
  }
}
