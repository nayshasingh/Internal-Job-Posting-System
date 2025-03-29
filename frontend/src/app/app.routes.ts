import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'post-job', component: JobPostingComponent, canActivate: [AuthGuard], data: { role: 'HR' } },
  { path: 'candidates', component: CandidateListComponent, canActivate: [AuthGuard], data: { role: 'HR' } }
];


