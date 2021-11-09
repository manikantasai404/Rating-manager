import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SigningComponent } from './components/signing/signing.component';
import { EmployeeComponent } from './components/employee/employee.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigningComponent },
  {
    path: 'joy-portal', component: LayoutComponent,
    children: [
      { path: 'employee', component: EmployeeComponent }
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
export const myRoutes = [SigningComponent, HomeComponent, LayoutComponent, EmployeeComponent, PageNotFoundComponent]
