import { Component } from '@angular/core';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-calculatoare',
  templateUrl: './calculatoare.component.html',
  styleUrls: ['./calculatoare.component.scss']
})
export class CalculatoareComponent {
  images: string[] = [];
  names: string[] = [];  
  prices: string[] = [];
  stock: number[] = [];
  data: any;
  elem_min: HTMLInputElement = (null as any);
  elem_price: any;

  constructor(private user:UsersService){
   this.elem_price=0;
    this.user.getProductByCategory("Calculatoare").subscribe(data=>{
      this.data=data;
      (data as any).forEach(element => {
        this.images.push((element as any).imag)
        this.names.push((element as any).name)
        this.prices.push((element as any).price)
        this.stock.push((element as any).stock)
      });
     
    })
  }
  ngOnInit() {
    this.elem_min = document.querySelector('#inp-pret-min')! ;
  console.log(this.elem_min)
  
  const newValue = this.elem_min.value;
  const target = (document.querySelector('.valueMin') as any);
  target.innerHTML = `${newValue} lei` as any;

    
}
onInputChange(event: any) {
  this.elem_min = document.querySelector('#inp-pret-min')! ;
  let target = document.querySelector('#infoRange_min')!;
  let newValue = this.elem_min.value;
 
  newValue = this.elem_min.value;
  target = document.querySelector('#infoRange_min')!;
  this.elem_price = newValue

target.innerHTML = `${newValue} lei`;

}
  
}
