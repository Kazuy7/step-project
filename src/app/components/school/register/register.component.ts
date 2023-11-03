import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Register } from 'src/app/interfaces/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() onSubmit = new EventEmitter<Register>()
  @Input() btnText!: string

  registerForm!: FormGroup;

  // ngOnInit é uma funcionalidade do Angular, então aqui, estamos inicializando o registerForm e dizendo que ele é um FormGroup
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      id: new FormControl(''),
      nomeescola: new FormControl('', [Validators.required]),
      responsavel: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
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


  // pegando o atributo 'nomeescola' do registerForm para validar
  get nomeescola() {
    return this.registerForm.get('nomeescola')!;
  }

  get responsavel() {
    return this.registerForm.get('responsavel')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get telefone() {
    return this.registerForm.get('telefone')!;
  }

  get rua() {
    return this.registerForm.get('rua')!;
  }

  get numero() {
    return this.registerForm.get('numero')!;
  }

  get bairro() {
    return this.registerForm.get('bairro')!;
  }

  get cidade() {
    return this.registerForm.get('cidade')!;
  }

  get estado() {
    return this.registerForm.get('estado')!;
  }

  get cep() {
    return this.registerForm.get('cep')!;
  }


  submit() {

    // Se o formulário não estiver 100% corretor as informações não são enviadas
    if(this.registerForm.invalid) {
      return;
    }
    console.log('Enviou o formulário!');

    // Virificando os dados do formulário do componente pai -> new-register
    this.onSubmit.emit(this.registerForm.value);
  }

}
