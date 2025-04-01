// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if (typeof localStorage === 'undefined') {
      console.error('localStorage is not available in this environment.');
      this.router.navigate(['/login']);
      return false;
    }
    
    const userRole = localStorage.getItem('userRole');
    const requiredRole = route.data['role'];

    if (!userRole) {
      // Not logged in: redirect to login page.
      this.router.navigate(['/login']);
      return false;
    }
    if (requiredRole && userRole !== requiredRole) {
      // Logged in, but not the required role: redirect to home.
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
