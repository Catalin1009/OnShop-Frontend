import { Component } from '@angular/core';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: string[] = [];  
  constructor(private user:UsersService){
    this.user.getData().subscribe(data=>{
      console.warn(data);
      (data as any).forEach(element => {
        this.images.push((element as any).imag)
  
      });
      console.warn(this.images);
    })
  }
}
