// src/app/components/navbar/navbar.component.ts
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">Job Portal</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" routerLink="/">Home</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/jobs">Jobs</a></li>
            <li class="nav-item" *ngIf="!isLoggedIn()"><a class="nav-link" routerLink="/login">Login</a></li>
            <li class="nav-item" *ngIf="!isLoggedIn()"><a class="nav-link" routerLink="/register">Register</a></li>
            <li class="nav-item" *ngIf="isLoggedIn() && isHR()"><a class="nav-link" routerLink="/post-job">Post Job</a></li>
            <li class="nav-item" *ngIf="isLoggedIn() && isHR()"><a class="nav-link" routerLink="/candidates">Candidates</a></li>
          </ul>
          <button *ngIf="isLoggedIn()" class="btn btn-outline-danger" (click)="logout()">Logout</button>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  router = inject(Router);

  isLoggedIn(): boolean {
    return typeof localStorage !== 'undefined' && !!localStorage.getItem('userRole');
  }
  
  isHR(): boolean {
    return typeof localStorage !== 'undefined' && localStorage.getItem('userRole') === 'HR';
  }
  
  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('userRole');
    }
    this.router.navigate(['/']);
  }
}
