import { Component } from '@angular/core';
import { Classroom } from 'src/app/interfaces/Classroom';
import { ClassroomService } from 'src/app/services/classroom.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-classroom',
  templateUrl: './new-classroom.component.html',
  styleUrls: ['./new-classroom.component.css']
})
export class NewClassroomComponent {
  btnText = 'Cadastrar'

  constructor(
  private classromService: ClassroomService,
  private messagesService: MessagesService,
  private router: Router,
  private route: ActivatedRoute
  ) {}

  // Chamando o classroom do tipo Classroom e dizendo que é uma operação assíncrona por causa da interação com a API
  async createHandler(classroom: Classroom) {
    // Transformando o formulário do Angular em um formData
    const formData = new FormData()
    // const id = this.router.url.substring(this.router.url.indexOf('l/') + 2, +9);
    const id = Number(this.route.snapshot.paramMap.get('id'));

    formData.append("professor", classroom.professor)
    formData.append("numeroalunos", classroom.numeroalunos)
    formData.append("ano", classroom.ano)
    formData.append("periodo", classroom.periodo)
    formData.append("dia", classroom.dia)
    formData.append("schools_id", String(id))

    
    await this.classromService.createClassroom(formData).subscribe();

    this.messagesService.add("Turma cadastrada com sucesso!")

    this.router.navigate(['/'])
  }
}
