import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticdataService {


  menus = [
    { id: 'attendance', icon: 'calendar_today', desc: 'Attendance', route: '/joy-portal/attendance', active: false },
    { id: 'adminDashboard', icon: 'home', desc: 'Admin Dashboard', route: '/joy-portal/admindashboard', active: false },
    { id: 'employeeDashboard', icon: 'home', desc: 'Employee Dashboard', route: '/joy-portal/employeedashboard', active: false },
    {
        id: 'employee', icon: 'people', desc: 'Employees', route: '/joy-portal/employee', active: false,
        submenus: [
            { id: 'allemployees', desc: 'All Employees', route: '/joy-portal/employee', disable: false },
            { id: 'departments', desc: 'Departments', route: '/joy-portal/departments', disable: false },
            { id: 'holidays', desc: 'Holidays', route: '/joy-portal/holidays', disable: false }
        ]
    },
    {id: 'leave', icon: 'person', desc: 'Leaves', route: '/joy-portal/leaves', active: false},
];

  constructor() { }
}
