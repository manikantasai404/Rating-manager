import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticdataService {


  menus = [
    // { id: 'attendance', icon: 'calendar_today', desc: 'Attendance', route: '/ems-tool/attendance', active: false },
    { id: 'adminDashboard', icon: 'home', desc: 'Admin Dashboard', route: '/ems-tool/admindashboard', active: false },
    // { id: 'hrDashboard', icon: 'home', desc: 'HR Dashboard', route: '/ems-tool/hrdashboard', active: false },
    // { id: 'employeeDashboard', icon: 'home', desc: 'Employee Dashboard', route: '/ems-tool/employeedashboard', active: false },
    // { id: 'managerDashboard', icon: 'home', desc: 'Manager Dashboard', route: '/ems-tool/managerdashboard', active: false },
    {
        id: 'employee', icon: 'people', desc: 'Employees', route: '/ems-tool/employee', active: false,
        submenus: [
            { id: 'allemployees', desc: 'All Employees', route: '/ems-tool/employee/list', disable: false },
            { id: 'departments', desc: 'Departments', route: '/ems-tool/departments/list', disable: false },
            // { id: 'holidays', desc: 'Holidays', route: '/ems-tool/holidays', disable: false }
        ]
    },
    {id: 'projects', icon: 'assignment_ind', desc: 'Projects', route: '/ems-tool/projects/list', active: false},
    {id: 'onbench', icon: 'assignment_ind', desc: 'On Bench', route: '/ems-tool/on-bench-employee/list', active: false},
    // {id: 'rating', icon: 'assignment_ind', desc: 'Rating', route: '/ems-tool/rating', active: false},
    // {id: 'leave', icon: 'person', desc: 'Leaves', route: '/ems-tool/leaves', active: false},
];

  constructor() { }
}
