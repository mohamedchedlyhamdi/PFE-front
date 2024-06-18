import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (token: string) => {
        // Handle the plain text token response
        console.log('Login successful, token:', token);
        // Store the token
        localStorage.setItem('authToken', token);
        // Navigate to the project component
        this.router.navigate(['/projet']);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 200 && error.error.text) {
          // Handle the plain text response when status is 200
          const token = error.error.text;
          console.log('Login successful, token:', token);
          // Store the token
          localStorage.setItem('authToken', token);
          // Navigate to the project component
          this.router.navigate(['/projet']);
        } else {
          this.errorMessage = 'Login failed';
          console.error('Login failed', error);
        }
      }
    });
  }
}
