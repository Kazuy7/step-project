import { Component } from '@angular/core';
import { School } from 'src/app/interfaces/School';
import { SchoolService } from 'src/app/services/school.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-school',
  templateUrl: './new-school.component.html',
  styleUrls: ['./new-school.component.css']
})
export class NewSchoolComponent {
  btnText = 'Cadastrar'

  constructor(
  private schoolService: SchoolService,
  private messagesService: MessagesService,
  private router: Router
  ) {}

  // Chamando o school do tipo School e dizendo que é uma operação assíncrona por causa da interação com a API
  async createHandler(school: School) {
    // Transformando o formulário do Angular em um formData
    const formData = new FormData()

    formData.append("nomeescola", school.nomeescola)
    formData.append("razaosocial", school.razaosocial)
    formData.append("cnpj", school.cnpj)
    formData.append("responsavel", school.responsavel)
    formData.append("telefone", school.telefone)
    formData.append("rua", school.rua)
    formData.append("numero", school.numero)
    formData.append("bairro", school.bairro)
    formData.append("cidade", school.cidade)
    formData.append("estado", school.estado)
    formData.append("cep", school.cep)
    
    await this.schoolService.createSchool(formData).subscribe();

    this.messagesService.add("Escola cadastrada com sucesso!")

    this.router.navigate(['/'])
  }
}
