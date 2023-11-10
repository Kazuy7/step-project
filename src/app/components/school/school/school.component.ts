import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { School } from 'src/app/interfaces/School';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
  @Output() onSubmit = new EventEmitter<School>()
  @Input() btnText!: string

  schoolForm!: FormGroup;

  // ngOnInit é uma funcionalidade do Angular, então aqui, estamos inicializando o schoolForm e dizendo que ele é um FormGroup
  ngOnInit(): void {
    this.schoolForm = new FormGroup({
      id: new FormControl(''),
      nomeescola: new FormControl('', [Validators.required]),
      razaosocial: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      responsavel: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      created_at: new FormControl(''),
      updated_at: new FormControl(''),
    });
  }


  // pegando o atributo 'nomeescola' do schoolForm para validar
  get nomeescola() {
    return this.schoolForm.get('nomeescola')!;
  }

  get razaosocial() {
    return this.schoolForm.get('razaosocial')!;
  }

  get cnpj() {
    return this.schoolForm.get('cnpj')!;
  }

  get responsavel() {
    return this.schoolForm.get('responsavel')!;
  }

  get telefone() {
    return this.schoolForm.get('telefone')!;
  }

  get rua() {
    return this.schoolForm.get('rua')!;
  }

  get numero() {
    return this.schoolForm.get('numero')!;
  }

  get bairro() {
    return this.schoolForm.get('bairro')!;
  }

  get cidade() {
    return this.schoolForm.get('cidade')!;
  }

  get estado() {
    return this.schoolForm.get('estado')!;
  }

  get cep() {
    return this.schoolForm.get('cep')!;
  }


  submit() {

    // Se o formulário não estiver 100% corretor as informações não são enviadas
    if(this.schoolForm.invalid) {
      return;
    }
    console.log('Enviou o formulário!');

    // Virificando os dados do formulário do componente pai -> new-school
    this.onSubmit.emit(this.schoolForm.value);
  }
}
