import { Component } from '@angular/core';
import { CompKit } from 'src/app/interfaces/Comp-Kit';
import { CompKitService } from 'src/app/services/comp-kit.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-compkit',
  templateUrl: './new-compkit.component.html',
  styleUrls: ['./new-compkit.component.css']
})
export class NewCompkitComponent {
  btnText = 'Criar';

  constructor(
    private compkitService: CompKitService,
    private messagesService: MessagesService, 
    private router:Router
    ) {}

  ngOnInit(): void {}

  async createHandler(compkit: CompKit) {
    const formData = new FormData();

    formData.append("quantidade", compkit.quantidade);
    formData.append("componentes_id", compkit.componentes_id!);

    // enviar para o service
    await this.compkitService.createCompKit(formData).subscribe();

    // exibir msg
    this.messagesService.add("Kit criado com sucesso!")

    // redirect
    this.router.navigate(['/'])
  }
}
