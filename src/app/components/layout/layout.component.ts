import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToasterService } from 'src/app/services/toaster.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit {

        constructor(public _toaster: ToasterService) { }

  ngOnInit(): void {
  }

}
