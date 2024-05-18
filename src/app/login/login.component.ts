// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Assurez-vous que cette ligne est présente

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Logged in successfully', response);
        // Gérer la redirection ou l'affichage d'un message de succès ici
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed: Invalid email or password.';
      }
    );
  }
}
