import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { School } from 'src/app/interfaces/School';
import { Teacher } from 'src/app/interfaces/Teacher';
import { MessagesService } from 'src/app/services/messages.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  @Output() onSubmit = new EventEmitter<Teacher>()
  @Input() btnText!: string

  school!: School
  classroomForm!: FormGroup;

  constructor(
    private schoolService: SchoolService,
    private route: ActivatedRoute,
    private messagesService: MessagesService
    ) { }

  // ngOnInit é uma funcionalidade do Angular, então aqui, estamos inicializando o classroomForm e dizendo que ele é um FormGroup
  ngOnInit(): void {
    this.classroomForm = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      tipo: new FormControl(''),
      status: new FormControl(''),
      schools_id: new FormControl(''), // desnecessário
      created_at: new FormControl(''),
      updated_at: new FormControl(''),
    });

    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.schoolService.getSchool(id).subscribe((item) => {
      this.school = item.data
    })
  }


  // pegando o atributo 'email' do classroomForm para validar
  get nome() {
    return this.classroomForm.get('nome')!;
  }

  get email() {
    return this.classroomForm.get('email')!;
  }

  get senha() {
    return this.classroomForm.get('senha')!;
  }

  submit() {

    // Se o formulário não estiver 100% corretor as informações não são enviadas
    if(this.classroomForm.invalid) {
      return;
    }
    console.log('Enviou o formulário!');

    // Virificando os dados do formulário do componente pai -> new-school
    this.onSubmit.emit(this.classroomForm.value);

    this.messagesService.add(`Professor cadastrado com sucesso!`)
  }
}
