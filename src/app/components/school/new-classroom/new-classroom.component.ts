import { Component } from '@angular/core';
import { Classroom } from 'src/app/interfaces/Classroom';
import { ClassroomService } from 'src/app/services/classroom.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { School } from 'src/app/interfaces/School';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-new-classroom',
  templateUrl: './new-classroom.component.html',
  styleUrls: ['./new-classroom.component.css']
})
export class NewClassroomComponent {
  btnText = 'Cadastrar'
  school?: School;

  constructor(
    private classromService: ClassroomService,
    private schoolService: SchoolService,
    private messagesService: MessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Puxando id pela url
    const idSchool = Number(this.route.snapshot.paramMap.get('id'));
    // Carregando dado pelo id
    this.schoolService.getSchool(idSchool).subscribe((item) => (this.school = item.data));
  }

  // Chamando o classroom do tipo Classroom e dizendo que é uma operação assíncrona por causa da interação com a API
  async createHandler(classroom: Classroom) {
    // Transformando o formulário do Angular em um formData
    const formData = new FormData()
    const id = Number(this.route.snapshot.paramMap.get('id'));

    formData.append("professor", classroom.professor)
    formData.append("numeroalunos", classroom.numeroalunos)
    formData.append("ano", classroom.ano)
    formData.append("turma", classroom.turma)
    formData.append("periodo", classroom.periodo)
    formData.append("dia", classroom.dia)
    formData.append("schools_id", String(id))

    await this.classromService.createClassroom(formData).subscribe();

    this.messagesService.add("Turma cadastrada com sucesso!")

    this.router.navigate(['/school/', id])
  }
}
