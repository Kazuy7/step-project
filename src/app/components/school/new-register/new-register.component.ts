import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Register } from 'src/app/interfaces/Register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent {
  btnText = 'Cadastrar'

  constructor(private registerService: RegisterService) {}

  // Chamando o register do tipo Register e dizendo que é uma operação assíncrona por causa da interação com a API
  async createHandler(register: Register) {
    // Transformando o formulário do Angular em um formData
    const formData = new FormData()

    formData.append("nomeescola", register.nomeescola)
    formData.append("responsavel", register.responsavel)
    formData.append("email", register.email)
    formData.append("telefone", register.telefone)
    formData.append("rua", register.rua)
    formData.append("numero", register.numero)
    formData.append("bairro", register.bairro)
    formData.append("cidade", register.cidade)
    formData.append("estado", register.estado)
    formData.append("cep", register.cep)
    
    await this.registerService.createRegister(formData).subscribe();
  }
    
}
