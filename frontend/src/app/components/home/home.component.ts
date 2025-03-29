// src/app/components/home/home.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="jumbotron">
      <h1 class="display-4">Welcome to the Job Posting Portal</h1>
      <p class="lead">Find the best opportunities!</p>
      <hr class="my-4">
      <a class="btn btn-primary btn-lg" routerLink="/jobs" role="button" routerLinkActive="active" ariaCurrentWhenActive="page">Browse Jobs</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .jumbotron { padding: 2rem; background-color: #f8f9fa; border-radius: 5px; }
  `]
})
export class HomeComponent { }
