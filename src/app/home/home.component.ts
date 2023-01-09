import { Component } from '@angular/core';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images: string[] = [];
  names: string[] = [];  
  prices: string[] = [];
  constructor(private user:UsersService){
    this.user.getData().subscribe(data=>{
      console.warn(data);
      (data as any).forEach(element => {
        this.images.push((element as any).imag)
        this.names.push((element as any).name)
        this.prices.push((element as any).price)
      });
      console.warn(this.images);
    })
  }
}
