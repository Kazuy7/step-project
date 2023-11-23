import { Component } from '@angular/core';
import { Teacher } from 'src/app/interfaces/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent {
  btnText = 'Cadastrar'

  constructor(
    private teacherService: TeacherService,
    private messagesService: MessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // Chamando o classroom do tipo Classroom e dizendo que é uma operação assíncrona por causa da interação com a API
  async createHandler(teacher: Teacher) {
    // Transformando o formulário do Angular em um formData
    const formData = new FormData()
    const id = Number(this.route.snapshot.paramMap.get('id'));

    formData.append("nome", teacher.nome)
    formData.append("email", teacher.email)
    formData.append("senha", teacher.senha)
    formData.append("tipo", String('professor'))
    formData.append("status", String('ativo'))
    formData.append("schools_id", String(id))


    await this.teacherService.createTeacher(formData).subscribe();

    this.messagesService.add("Professor cadastrado com sucesso!")

    this.router.navigate(['/school/', id])
  }
}
