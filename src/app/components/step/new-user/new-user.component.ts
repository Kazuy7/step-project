import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  btnText = 'Criar';

  constructor(
    private userService: UserService,
    private messagesService: MessagesService, 
    private router:Router
    ) {}

  ngOnInit(): void {}

  async createHandler(user: User) {
    const formData = new FormData();

    formData.append("email", user.email);
    formData.append("senha", user.senha);
    formData.append("tipo", user.tipo);
    formData.append("status", user.status);

    // to do

    // enviar para o service
    await this.userService.createUser(formData).subscribe();

    // exibir msg
    this.messagesService.add("Usuário criado com sucesso!")

    // redirect
    this.router.navigate(['/'])
  }

}
