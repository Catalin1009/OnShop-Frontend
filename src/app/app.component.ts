import { Component } from '@angular/core';
import {UsersService} from './users.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OnShop-Frontend';
  constructor(private user:UsersService){
    this.user.getData().subscribe(data=>{
      console.warn(data)
    })
  }
}
