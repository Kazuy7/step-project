import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Teacher } from 'src/app/interfaces/Teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  @Output() onSubmit = new EventEmitter<Teacher>()
  @Input() btnText!: string

  classroomForm!: FormGroup;

  // ngOnInit é uma funcionalidade do Angular, então aqui, estamos inicializando o classroomForm e dizendo que ele é um FormGroup
  ngOnInit(): void {
    this.classroomForm = new FormGroup({
      id: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      tipo: new FormControl(''),
      status: new FormControl('', [Validators.required]),
      schools_id: new FormControl(''), // desnecessário
      created_at: new FormControl(''),
      updated_at: new FormControl(''),
    });
  }


  // pegando o atributo 'email' do classroomForm para validar
  get email() {
    return this.classroomForm.get('email')!;
  }

  get senha() {
    return this.classroomForm.get('senha')!;
  }

  get status() {
    return this.classroomForm.get('status')!;
  }

  submit() {

    // Se o formulário não estiver 100% corretor as informações não são enviadas
    if(this.classroomForm.invalid) {
      return;
    }
    console.log('Enviou o formulário!');

    // Virificando os dados do formulário do componente pai -> new-school
    this.onSubmit.emit(this.classroomForm.value);
  }
}
