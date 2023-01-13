import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-jucarii',
  templateUrl: './jucarii.component.html',
  styleUrls: ['./jucarii.component.scss']
})
export class JucariiComponent {
  images: string[] = [];
  names: string[] = [];  
  prices: string[] = [];
  stock: number[] = [];
  descriptions:string[]=[];

  constructor(private user:UsersService){
    this.user.getProductByCategory("Jucarii").subscribe(data=>{
      console.warn(data);
      (data as any).forEach(element => {
        this.images.push((element as any).imag)
        this.names.push((element as any).name)
        this.prices.push((element as any).price)
        this.stock.push((element as any).stock)
        this.descriptions.push((element as any).description)
      });
      console.warn(this.images);
    })
  }

  onPageChange(i){
    console.log(this.images[i])
    window.localStorage.setItem("image",this.images[i]);
    window.localStorage.setItem("name", this.names[i]);
    window.localStorage.setItem("description", this.descriptions[i]);
    window.localStorage.setItem("price", this.prices[i]);
    window.localStorage.setItem("stoc", this.stock[i].toString());
  }
}
