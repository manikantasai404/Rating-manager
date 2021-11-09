import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/services/toaster.service';
import { StaticdataService } from 'src/app/services/staticdata.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

        constructor(public _toaster: ToasterService,
          public router: Router,
          public staticData: StaticdataService) { }

  ngOnInit(): void {
  }

  menuClicked(menu: any) {
    if (menu.submenus?.length) {
        // let index = this.staticData.menus.findIndex(x => x.id == menu.id);
        // this.staticData.menus[index].active = !this.staticData.menus[index].active;
        menu.active = !menu.active;
    }
    else if (menu.route)
        this.router.navigate([menu.route]);
}

subMenuClicked(submenu: any) {
    if (submenu.route)
        this.router.navigate([submenu.route]);
}

}
