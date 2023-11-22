import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from 'src/app/interfaces/Classroom';
import { ClassroomService } from 'src/app/services/classroom.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.css']
})
export class EditClassroomComponent {
  classroom!: Classroom
  btnText: string = 'Salvar'

  constructor(
    private classroomService: ClassroomService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.classroomService.getClassroom(id).subscribe((item) => {
      this.classroom = item.data
    })

    console.log(this.classroom)
  }

  async editHandler(classroomData: Classroom) {
    const id = this.classroom.id

    const formData = new FormData()

    formData.append('professor', classroomData.professor)
    formData.append('numeroalunos', classroomData.numeroalunos)
    formData.append('ano', classroomData.ano)
    formData.append('turma', classroomData.turma)
    formData.append('periodo', classroomData.periodo)
    formData.append('dia', classroomData.dia)

    await this.classroomService.updateClassroom(id!, formData).subscribe()

    this.messagesService.add(`Informações atualizadas com sucesso!`)

    this.router.navigate(['/school/', id, 'classroom', id])
  }
}
