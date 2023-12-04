import { Component, Input } from '@angular/core';
import { Kit } from 'src/app/interfaces/Kit';
import { KitService } from 'src/app/services/kit.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';
import { ComponenteService } from 'src/app/services/componente.service';
import { Componente } from 'src/app/interfaces/Componente';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-new-kit',
  templateUrl: './new-kit.component.html',
  styleUrls: ['./new-kit.component.css']
})
export class NewKitComponent {
  btnText = 'Criar';
  componentes: Componente[] = [];
  componentesSelecionados: any[] = [];

  constructor(
    private kitService: KitService,
    private messagesService: MessagesService,
    private router: Router,
    private componenteService: ComponenteService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.componentesSelecionados$.subscribe((componentesSelecionados) => {
      // Faça o que quiser com a variável componentesSelecionados no componente NewKitComponent
      this.componentesSelecionados = componentesSelecionados;
    });
  }

  async createHandler(kit: Kit) {
    this.componenteService.getComponentes().subscribe((items) => {
      this.componentes = items.data;
    });

    const formData = new FormData();

    this.componentesSelecionados.forEach((componente, index) => {
      formData.append(`componentes[${index}][componente_id]`, componente.componente_id);
      formData.append(`componentes[${index}][quantidade]`, componente.quantidade);
    });

    formData.append('[kit][nome]', kit.nome);
    formData.append('[kit][qtdalunos]', kit.qtdalunos);
    formData.append('[kit][descricao]', kit.descricao);

    // enviar para o service
    await this.kitService.createKit(formData).subscribe();

    // exibir msg
    this.messagesService.add("Kit criado com sucesso!")

    // redirect
    this.router.navigate(['/'])
  }
}
