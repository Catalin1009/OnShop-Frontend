import { Component } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  route;
  constructor( route: ActivatedRoute) { }
}
