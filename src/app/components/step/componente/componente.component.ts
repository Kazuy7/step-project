import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Componente } from 'src/app/interfaces/Componente';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {
  @Output() onSubmit = new EventEmitter<Componente>()
  @Input() btnText!: string;
  @Input() componenteData: Componente | null = null

  componenteForm!: FormGroup;

  ngOnInit(): void {
    this.componenteForm = new FormGroup({
      id: new FormControl(this.componenteData ? this.componenteData.id : ''),
      nome: new FormControl(this.componenteData ? this.componenteData.nome : '', [Validators.required]),
      descricao: new FormControl(this.componenteData ? this.componenteData.descricao : '', [Validators.required]),
      valor: new FormControl(this.componenteData ? this.componenteData.valor : '', [Validators.required]),
      created_at: new FormControl(this.componenteData ? this.componenteData.created_at : ''),
      updated_at: new FormControl(this.componenteData ? this.componenteData.updated_at : ''),
    });
  }

  get nome() {
    return this.componenteForm.get('nome')!;
  }

  get descricao() {
    return this.componenteForm.get('descricao')!;
  }

  get valor() {
    return this.componenteForm.get('valor')!;
  }

  submit() {
    if (this.componenteForm.invalid) {
      return;
    }
    console.log(this.componenteForm.value);

    this.onSubmit.emit(this.componenteForm.value);
  }
}
