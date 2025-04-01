import { Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { JobPostingCreateComponent } from './components/job-posting-create/job-posting-create.component';
import { JobPostingListComponent } from './components/job-posting-list/job-posting-list.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'jobs', component: JobPostingListComponent },
  { path: 'post-job', component: JobPostingCreateComponent, canActivate: [AuthGuard], data: { role: 'HR' } },
  { path: 'candidates', component: CandidateListComponent, canActivate: [AuthGuard], data: { role: 'HR' } }
];


