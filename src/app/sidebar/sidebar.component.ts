import { Component } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  route;
  logat;
  constructor( route: ActivatedRoute) { this.logat = window.localStorage.getItem("logat") }

  logOut(){
   
    window.localStorage.setItem("logat", "")
    this.logat = window.localStorage.getItem("logat")
    window.localStorage.setItem("products", "")
    window.localStorage.setItem("recentlyViewed", "")
    return true;
  }

  click(){
    this.logat = window.localStorage.getItem("logat")
  }
}
