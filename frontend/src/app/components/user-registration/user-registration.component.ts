// src/app/components/user-registration/user-registration.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card" style="max-width: 500px; margin: auto;">
      <div class="card-body">
        <h3 class="card-title">Register</h3>
        <form (ngSubmit)="registerUser()">
          <div class="mb-3">
            <label>Username</label>
            <input type="text" class="form-control" [(ngModel)]="user.username" name="username" required>
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" class="form-control" [(ngModel)]="user.password" name="password" required>
          </div>
          <div class="mb-3">
            <label>Role</label>
            <select class="form-select" [(ngModel)]="user.role" name="role">
              <option value="Candidate">Candidate</option>
              <option value="HR">HR</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class UserRegistrationComponent {
  user = { username: '', password: '', role: 'Candidate' };

  constructor(private userService: UserService, private router: Router) {}

  registerUser(): void {
    this.userService.register(this.user)
      .subscribe({
        next: (res) => { 
          alert('User registered successfully!'); 
          this.router.navigate(['/login']);
        },
        error: err => alert('Registration failed. Please try again.')
      });
  }
}
