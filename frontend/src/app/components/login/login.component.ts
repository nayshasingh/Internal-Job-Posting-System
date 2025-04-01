import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card" style="max-width: 500px; margin: auto;">
      <div class="card-body">
        <h3 class="card-title">Login</h3>
        <form (ngSubmit)="loginUser()">
          <div class="mb-3">
            <label>Username</label>
            <input type="text" class="form-control" [(ngModel)]="credentials.username" name="username" required>
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" class="form-control" [(ngModel)]="credentials.password" name="password" required>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private userService: UserService, private router: Router) { }

  loginUser(): void {
    this.userService.login(this.credentials)
      .subscribe({
        next: (user: User) => {
          // Save user id and role in localStorage for further use.
          localStorage.setItem('userRole', user.role);
          localStorage.setItem('userId', user.id.toString());
          alert(`Welcome ${user.username}!`);
          this.router.navigate(['/']);
        },
        error: err => alert('Invalid credentials. Please try again.')
      });
  }
}
