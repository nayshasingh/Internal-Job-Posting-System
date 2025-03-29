// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Adjust the base URL as needed.
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  // Registration: POST /users
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  // Login: POST /login 
  login(credentials: any): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, credentials);
  }

  // Get candidates: GET /users?role=Candidate
  getCandidates(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users?role=Candidate`);
  }
}
