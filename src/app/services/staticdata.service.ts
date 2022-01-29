import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticdataService {


  menus = [
    // { id: 'attendance', icon: 'calendar_today', desc: 'Attendance', route: '/joy-portal/attendance', active: false },
    { id: 'adminDashboard', icon: 'home', desc: 'Admin Dashboard', route: '/joy-portal/admindashboard', active: false },
    // { id: 'hrDashboard', icon: 'home', desc: 'HR Dashboard', route: '/joy-portal/hrdashboard', active: false },
    // { id: 'employeeDashboard', icon: 'home', desc: 'Employee Dashboard', route: '/joy-portal/employeedashboard', active: false },
    // { id: 'managerDashboard', icon: 'home', desc: 'Manager Dashboard', route: '/joy-portal/managerdashboard', active: false },
    {
        id: 'employee', icon: 'people', desc: 'Employees', route: '/joy-portal/employee', active: false,
        submenus: [
            { id: 'allemployees', desc: 'All Employees', route: '/joy-portal/employee/list', disable: false },
            { id: 'departments', desc: 'Departments', route: '/joy-portal/departments/list', disable: false },
            // { id: 'holidays', desc: 'Holidays', route: '/joy-portal/holidays', disable: false }
        ]
    },
    {id: 'projects', icon: 'assignment_ind', desc: 'Projects', route: '/joy-portal/projects/list', active: false},
    {id: 'onbench', icon: 'assignment_ind', desc: 'On Bench', route: '/joy-portal/on-bench-employee/list', active: false},
    // {id: 'rating', icon: 'assignment_ind', desc: 'Rating', route: '/joy-portal/rating', active: false},
    // {id: 'leave', icon: 'person', desc: 'Leaves', route: '/joy-portal/leaves', active: false},
];

  constructor() { }
}
