// src/app/components/job-posting/job-posting.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-posting-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card" style="max-width: 600px; margin: auto;">
      <div class="card-body">
        <h3 class="card-title">Post a Job</h3>
        <form (ngSubmit)="postJob()">
          <div class="mb-3">
            <label>Job Title</label>
            <input type="text" class="form-control" [(ngModel)]="job.title" name="title" required>
          </div>
          <div class="mb-3">
            <label>Job Description</label>
            <textarea class="form-control" [(ngModel)]="job.description" name="description" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Post Job</button>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class JobPostingCreateComponent {
  job = { title: '', description: '' };

  constructor(private jobService: JobService, private router: Router) { }

  postJob(): void {
    const userIdStr = localStorage.getItem('userId');
    if (!userIdStr) {
      alert('You must be logged in as HR to post a job.');
      this.router.navigate(['/login']);
      return;
    }
    const userId = parseInt(userIdStr, 10);
    this.jobService.createJob(this.job, userId)
      .subscribe({
        next: (res) => {
          alert('Job posted successfully!');
          this.router.navigate(['/jobs']);
        },
        error: err => alert('Failed to post job. Please try again.')
      });
  }
}
