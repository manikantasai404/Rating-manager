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


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigningComponent },
  {
    path: 'joy-portal', component: LayoutComponent,
    children: [
      { path: 'employee', component: EmployeeComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'admindashboard', component: AdmindashboardComponent },
      { path: 'employeedashboard', component: EmployeedashboardComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'holidays', component: HolidaysComponent },
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
  PageNotFoundComponent]
