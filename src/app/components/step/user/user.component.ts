import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Output() onSubmit = new EventEmitter<User>()
  @Input() btnText!: string;

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      status: new FormControl(''),
      created_at: new FormControl(''),
      updated_at: new FormControl(''),
    });
  }

  get email() {
    return this.userForm.get('email')!;
  }

  get senha() {
    return this.userForm.get('senha')!;
  }

  get tipo() {
    return this.userForm.get('tipo')!;
  }

  submit() {
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);

    this.onSubmit.emit(this.userForm.value);
  }

}
