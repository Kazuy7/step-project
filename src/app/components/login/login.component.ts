import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  login(email: string, senha: string) {
    const loginData = { email, senha };
    this.http.post('http://localhost:3333/api/user/login', loginData)
      .subscribe(response => {
        console.log('Login successful:', response);
        // Handle successful login response
      }, error => {
        console.error('Login failed:', error);
        // Handle failed login response
      });
  }

}