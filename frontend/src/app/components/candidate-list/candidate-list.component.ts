// src/app/components/candidate-list/candidate-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Candidate List</h2>
      <div *ngIf="candidates && candidates.length > 0; else noCandidates">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let candidate of candidates">
            {{ candidate.username }}
          </li>
        </ul>
      </div>
      <ng-template #noCandidates>
        <p>No candidates found.</p>
      </ng-template>
    </div>
  `,
  styles: []
})
export class CandidateListComponent implements OnInit {
  candidates: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Backend endpoint expects a query parameter "role=Candidate"
    this.userService.getCandidates().subscribe({
      next: (data: any) => this.candidates = data,
      error: err => console.error('Error fetching candidates:', err)
    });
  }
}
