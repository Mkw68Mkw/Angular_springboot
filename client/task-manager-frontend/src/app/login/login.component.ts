import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private router: Router) {}

  onSubmit() {
    // Temporäre Logik bis zum Backend-Anschluss
    console.log('Login attempted with:', this.credentials);
    //this.router.navigate(['/']);
  }

  navigateToTasks() {
    this.router.navigate(['/']);
  }
}