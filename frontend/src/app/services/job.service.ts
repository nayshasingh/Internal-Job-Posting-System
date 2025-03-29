// src/app/services/job.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // GET /job_postings to get all jobs
  getAllJobs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/job_postings`);
  }

  // POST /job_postings?userId=<id>
  createJob(job: any, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/job_postings?userId=${userId}`, job);
  }
}
