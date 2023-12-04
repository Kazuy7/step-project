import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Kit } from 'src/app/interfaces/Kit';
import { KitService } from 'src/app/services/kit.service';
import { CompKit } from 'src/app/interfaces/Comp-Kit';
import { Componente } from 'src/app/interfaces/Componente';
import { ComponenteService } from 'src/app/services/componente.service';

@Component({
  selector: 'app-compkit',
  templateUrl: './compkit.component.html',
  styleUrls: ['./compkit.component.css']
})
export class CompkitComponent {
  @Output() onSubmit = new EventEmitter<CompKit>()
  @Input() btnText!: string;

  compkitForm!: FormGroup;
  kits: Kit[] = [];
  componentes: Componente[] = [];

  constructor(
    private kitService: KitService,
    private componenteService: ComponenteService
  ) {}

  ngOnInit() {
    this.compkitForm = new FormGroup({
      id: new FormControl(''),
      quantidade: new FormControl('', [Validators.required]),
      created_at: new FormControl(''),
      updated_at: new FormControl(''),
    });

    this.kitService.getKits().subscribe((items) => {
      this.kits = items.data;
      console.log('Kit:', this.kits)
    });

    this.componenteService.getComponentes().subscribe((items) => {
      this.componentes = items.data;
      console.log('Componentes', this.componentes)
    });
  }

  get quantidade() {
    return this.compkitForm.get('quantidade')!;
  }

  submit() {
    if (this.compkitForm.invalid) {
      return;
    }
    console.log(this.compkitForm.value);

    this.onSubmit.emit(this.compkitForm.value);
  }

}
