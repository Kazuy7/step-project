import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Classroom } from 'src/app/interfaces/Classroom';
import { SchoolService } from 'src/app/services/school.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { School } from 'src/app/interfaces/School';
import { Teacher } from 'src/app/interfaces/Teacher';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent {
  @Output() onSubmit = new EventEmitter<Classroom>()
  @Input() btnText!: string
  @Input() classroomData: Classroom | null = null

  classroomForm!: FormGroup;
  school?: School;
  teachers: Teacher[] = [];

  constructor(
    private teacherService: TeacherService,
    private schoolService: SchoolService,
    private route: ActivatedRoute
  ) { }

  // ngOnInit é uma funcionalidade do Angular, então aqui, estamos inicializando o classroomForm e dizendo que ele é um FormGroup
  ngOnInit(): void {

    // Puxando id pela url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Carregando dado pelo id
    this.schoolService.getSchool(id).subscribe((item) => (this.school = item.data));

    this.classroomForm = new FormGroup({
      id: new FormControl(this.classroomData ? this.classroomData.id : ''),
      professor: new FormControl(this.classroomData ? this.classroomData.professor : ''),
      numeroalunos: new FormControl(this.classroomData ? this.classroomData.numeroalunos : '', [Validators.required]),
      ano: new FormControl(this.classroomData ? this.classroomData.ano : '', [Validators.required]),
      turma: new FormControl(this.classroomData ? this.classroomData.turma : '', [Validators.required]),
      periodo: new FormControl(this.classroomData ? this.classroomData.periodo : '', [Validators.required]),
      dia: new FormControl(this.classroomData ? this.classroomData.dia : '', [Validators.required]),
      schools_id: new FormControl(this.classroomData ? this.classroomData.schools_id : ''), // desnecessário
      created_at: new FormControl(this.classroomData ? this.classroomData.created_at : ''),
      updated_at: new FormControl(this.classroomData ? this.classroomData.updated_at : ''),
    });

    // Filtrando o array das classrooms (não está funcionando no console network)
    this.teacherService.getTeachers().subscribe((items) => {
      this.teachers = items.data.filter((teacher) => teacher.schools_id == this.school?.id);
      console.log('Teachers',this.teachers)
      console.log('Schools',this.school)
    });

  }


  // pegando o atributo 'professor' do classroomForm para validar
  get professor() {
    return this.classroomForm.get('professor');
  }

  get numeroalunos() {
    return this.classroomForm.get('numeroalunos')!;
  }

  get ano() {
    return this.classroomForm.get('ano')!;
  }

  get turma() {
    return this.classroomForm.get('turma')!;
  }

  get periodo() {
    return this.classroomForm.get('periodo')!;
  }

  get dia() {
    return this.classroomForm.get('dia')!;
  }


  submit() {

    // Se o formulário não estiver 100% corretor as informações não são enviadas
    if (this.classroomForm.invalid) {
      return;
    }
    console.log('Enviou o formulário!');

    // Virificando os dados do formulário do componente pai -> new-school
    this.onSubmit.emit(this.classroomForm.value);
  }
}
