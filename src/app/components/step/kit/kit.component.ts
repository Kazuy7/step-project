import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Componente } from 'src/app/interfaces/Componente';
import { Kit } from 'src/app/interfaces/Kit';
import { ComponenteService } from 'src/app/services/componente.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.css']
})
export class KitComponent {
  @Output() onSubmit = new EventEmitter<Kit>()
  @Input() btnText!: string;

  kitForm!: FormGroup;
  componentes: Componente[] = [];

  constructor(
    private componenteService: ComponenteService,
    private fb: FormBuilder,
    private sharedService: SharedService
  ) { }

  // Adicione a propriedade componentesSelecionados
  componentesSelecionados: any[] = [];

  ngOnInit(): void {
    this.kitForm = this.fb.group({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      qtdalunos: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      quantidade: new FormControl(''),
      componente_id: new FormControl(''),
      created_at: new FormControl(''),
      updated_at: new FormControl(''),
    });

    this.componenteService.getComponentes().subscribe((items) => {
      this.componentes = items.data;
    });
  }

  get nome() {
    return this.kitForm.get('nome')!;
  }

  get qtdalunos() {
    return this.kitForm.get('qtdalunos')!;
  }

  get descricao() {
    return this.kitForm.get('descricao')!;
  }

  get quantidade() {
    return this.kitForm.get('quantidade')!;
  }

  get componente_id() {
    return this.kitForm.get('componente_id')!;
  }

  // Adicione o método adicionarComponente
  adicionarComponente() {
    if (this.kitForm.controls['componente_id'].value && this.kitForm.controls['quantidade'].value) {
      const componenteSelecionado = {
        componente_id: this.componentes.find(c => c.id == this.kitForm.controls['componente_id'].value)?.id || '',
        nome: this.componentes.find(c => c.id == this.kitForm.controls['componente_id'].value)?.nome || '',
        quantidade: this.kitForm.controls['quantidade'].value
      };
      
      this.componentesSelecionados.push(componenteSelecionado);
      
      // Limpar os campos
      this.kitForm.controls['componente_id'].setValue('');
      this.kitForm.controls['quantidade'].setValue('');

      this.sharedService.atualizarComponentesSelecionados(this.componentesSelecionados);
    }
  }

  submit() {
    if (this.kitForm.invalid) {
      return;
    }
    console.log('Informações enviadas pelo form:', this.kitForm.value);

    this.onSubmit.emit(this.kitForm.value);
  }
}
