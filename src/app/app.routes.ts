import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignUpAsEmployeeComponent } from './pages/sign-up-as-employee/sign-up-as-employee.component';
import { EmployeeProfileComponent } from './pages/employee-profile/employee-profile.component';
import { ApplyNowComponent } from './pages/apply-now/apply-now.component';
import { LoginComponent } from './pages/login/login.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { LoginEmployersComponent } from './pages/login-employers/login-employers.component';
import { EmployerProfileComponent } from './pages/employer-profile/employer-profile.component';
import { JobPostComponent } from './pages/job-post/job-post.component';
import { PostSubmitComponent } from './pages/post-submit/post-submit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'sign-up-employee', component: SignUpAsEmployeeComponent },
    { path: 'employee-profile', component: EmployeeProfileComponent },
    { path: 'app-apply-now', component: ApplyNowComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Submit', component: SubmitComponent },
    { path: 'loginEmployers', component: LoginEmployersComponent },
    { path: 'EmployerProfile', component: EmployerProfileComponent },
    { path: 'JobPosting', component: JobPostComponent },
    { path: 'PostSubmit', component: PostSubmitComponent },
    
];
