import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SigningComponent } from './components/signing/signing.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { EmployeedashboardComponent } from './components/employeedashboard/employeedashboard.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { RatingComponent } from './components/rating/rating.component';
import { ManagerdashboardComponent } from './components/managerdashboard/managerdashboard.component';
import { HrdashboardComponent } from './components/hrdashboard/hrdashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { OnbenchComponent } from './components/onbench/onbench.component';
import { EmployComponent } from './components/employ/employ.component';
import { DepartmentComponent } from './components/department/department.component';
import { ProjectComponent } from './components/project/project.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigningComponent },
  {
    path: 'ems-tool', component: LayoutComponent,
    children: [

      //Admin components
      { path: 'admindashboard', component: AdmindashboardComponent },
      { path: 'employee/list', component: EmployeeComponent },
      { path: 'employee/list/:id', component: EmployComponent },
      { path: 'departments/list', component: DepartmentsComponent },
      { path: 'departments/list/:id', component: DepartmentComponent },
      { path: 'projects/list', component: ProjectsComponent },
      { path: 'projects/list/:id', component: ProjectComponent },
      { path: 'on-bench-employee/list', component: OnbenchComponent },

      { path: 'attendance', component: AttendanceComponent },
      { path: 'hrdashboard', component: HrdashboardComponent },
      { path: 'employeedashboard', component: EmployeedashboardComponent },
      { path: 'managerdashboard', component: ManagerdashboardComponent },
      { path: 'holidays', component: HolidaysComponent },
      { path: 'rating', component: RatingComponent },
      { path: 'leaves', component: LeavesComponent },
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutes = [SigningComponent,
  HomeComponent,
  LayoutComponent,
  EmployeeComponent,
  LeavesComponent,
  HolidaysComponent,
  EmployeedashboardComponent,
  AdmindashboardComponent,
  DepartmentsComponent,
  AttendanceComponent,
  RatingComponent,
  ManagerdashboardComponent,
  HrdashboardComponent,
  ProjectsComponent,
  OnbenchComponent,
  EmployComponent,
  DepartmentComponent,
  ProjectComponent,
  PageNotFoundComponent]
