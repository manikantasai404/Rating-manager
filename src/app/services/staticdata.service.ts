import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticdataService {


  menus = [
    { id: 'home', icon: 'home', desc: 'Home', route: '/one-platform/home', active: false },
    {
        id: 'employee', icon: 'grid_on', desc: 'Employee', route: '/joy-portal/employee', active: false,
        // submenus: [
        //     { id: 'product-list', desc: 'Product Set up', route: '/joy-portal/home', caps: ['SUPER_USER', 'PRODUCT_SETUP'], disable: false },
        //     { id: 'score-list', desc: 'Scoring Set up', route: '/one-platform/product/scoring/list', caps: ['SUPER_USER', 'SCORE_SETUP'], disable: false }
        // ]
    },
    { id: 'finance', icon: 'attach_money', desc: 'Finance', route: '/one-platform/finance', active: false },
    {
        id: 'management', icon: 'person', desc: 'Management', route: '/one-platform/management', active: false,
        submenus: [
            { id: 'org', desc: 'Organisation Set up', route: '/one-platform/management/organisation/list', caps: ['SUPER_USER'], disable: false },
            { id: 'roles', desc: 'Roles Set up', route: '/one-platform/management/roles/list', caps: ['SUPER_USER'], disable: false },
            { id: 'capabilities', desc: 'Capabilities Set up', route: '/one-platform/management/capabilities/list', caps: ['SUPER_USER'], disable: false },
            { id: 'rolesandcapabilities', desc: 'Link Role & Capabilities', route: '/one-platform/management/rolesandcapabillity/list', caps: ['SUPER_USER'], disable: false },
            { id: 'manageusers', desc: 'Manage Users', route: '/one-platform/management/users/list', caps: ['MANAGE_USERS'], disable: false },
            { id: 'workinggroups', desc: 'Linking Working Groups with Users', route: '/one-platform/management/workinggroups/list', caps: ['SUPER_USER'], disable: false }
        ]
    },
    { id: 'claims', icon: 'library_books', desc: 'Claims', route: '/one-platform/claims', active: false }
];

  constructor() { }
}
