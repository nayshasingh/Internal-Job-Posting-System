// src/app/components/job-list/job-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-posting-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Available Jobs</h2>
      <div *ngIf="jobs && jobs.length > 0; else noJobs">
        <div *ngFor="let job of jobs" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ job.title }}</h5>
            <p class="card-text">{{ job.description }}</p>
          </div>
        </div>
      </div>
      <ng-template #noJobs>
        <p>No job postings available.</p>
      </ng-template>
    </div>
  `,
  styles: []
})
export class JobPostingListComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe({
      next: (data: any) => this.jobs = data,
      error: err => console.error('Error fetching jobs:', err)
    });
  }
}
