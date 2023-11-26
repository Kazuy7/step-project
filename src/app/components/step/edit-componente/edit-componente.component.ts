import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Componente } from 'src/app/interfaces/Componente';
import { ComponenteService } from 'src/app/services/componente.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-componente',
  templateUrl: './edit-componente.component.html',
  styleUrls: ['./edit-componente.component.css']
})
export class EditComponenteComponent {
  componente!: Componente
  btnText: string = 'Salvar'

  constructor(
    private componenteService: ComponenteService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.componenteService.getComponente(id).subscribe((item) => {
      this.componente = item.data
    })
  }

  async editHandler(componenteData: Componente) {
    const id = this.componente.id

    const formData = new FormData()

    formData.append('nome', componenteData.nome)
    formData.append('descricao', componenteData.descricao)
    formData.append('valor', componenteData.valor)

    await this.componenteService.updateComponente(id!, formData).subscribe()

    this.messagesService.add(`Informações atualizadas com sucesso!`)

    this.router.navigate(['/componente/list'])
  }
}
