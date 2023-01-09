import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-haine',
  templateUrl: './haine.component.html',
  styleUrls: ['./haine.component.scss']
})
export class HaineComponent {
  images: string[] = [];
  names: string[] = [];  
  prices: string[] = [];
  stock: number[] = [];

  constructor(private user:UsersService){
    this.user.getProductByCategory("Haine").subscribe(data=>{
      console.warn(data);
      (data as any).forEach(element => {
        this.images.push((element as any).imag)
        this.names.push((element as any).name)
        this.prices.push((element as any).price)
        this.stock.push((element as any).stock)
      });
      console.warn(this.images);
    })
  }
}
