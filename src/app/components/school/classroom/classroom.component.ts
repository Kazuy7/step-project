import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Classroom } from 'src/app/interfaces/Classroom';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent {
  @Output() onSubmit = new EventEmitter<Classroom>()
  @Input() btnText!: string

  classroomForm!: FormGroup;

  // ngOnInit é uma funcionalidade do Angular, então aqui, estamos inicializando o classroomForm e dizendo que ele é um FormGroup
  ngOnInit(): void {

    this.classroomForm = new FormGroup({
      id: new FormControl(''),
      professor: new FormControl('', [Validators.required]),
      numeroalunos: new FormControl('', [Validators.required]),
      ano: new FormControl('', [Validators.required]),
      periodo: new FormControl('', [Validators.required]),
      dia: new FormControl('', [Validators.required]),
      schools_id: new FormControl(''), // desnecessário
      created_at: new FormControl(''),
      updated_at: new FormControl(''),
    });
  }


  // pegando o atributo 'professor' do classroomForm para validar
  get professor() {
    return this.classroomForm.get('professor')!;
  }

  get numeroalunos() {
    return this.classroomForm.get('numeroalunos')!;
  }

  get ano() {
    return this.classroomForm.get('ano')!;
  }

  get periodo() {
    return this.classroomForm.get('periodo')!;
  }

  get dia() {
    return this.classroomForm.get('dia')!;
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
