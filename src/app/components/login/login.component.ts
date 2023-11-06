import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = { email: '', senha: '' };

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.credentials).subscribe(response => {
      // armazena o token JWT no navegador
      localStorage.setItem('token', response.token);

      // redireciona para a página inicial
      window.location.href = '/';
    });
  }
}
