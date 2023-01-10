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
  imported:boolean[]=[];
  sizes:string[] =[];
  descriptions:string[]=[];
  elem_min: HTMLInputElement = (null as any);
  elem_price: any;
  elem_checkbox:HTMLInputElement = (null as any);
  elem_dropdown: HTMLInputElement = (null as any);
  constructor(private user:UsersService){
    this.elem_checkbox;
    this.elem_price=0;
    this.elem_dropdown;
    this.user.getProductByCategory("Haine").subscribe(data=>{
      console.warn(data);
      (data as any).forEach(element => {
        this.images.push((element as any).imag)
        this.names.push((element as any).name)
        this.prices.push((element as any).price)
        this.stock.push((element as any).stock)
        this.imported.push((element as any).is_imported)
        this.sizes.push((element as any).size)
        this.descriptions.push((element as any).description)
        console.log((element as any).is_imported)
      });
      console.warn(this.images);
    })
  }
  ngOnInit(){
    this.elem_checkbox = document.querySelector("#is_imported")!;
    this.elem_dropdown = document.querySelector("#size")!;
    
  }
  onInputChange(event: any) {
    console.log(this.sizes)
    this.elem_dropdown = document.querySelector("#size")!;
    this.elem_checkbox = document.querySelector("#is_imported")!;
    console.log(this.imported[2]);
    this.elem_min = document.querySelector('#inp-pret-min')! ;
    let target = document.querySelector('#infoRange_min')!;
    let newValue = this.elem_min.value;
   
    newValue = this.elem_min.value;
    target = document.querySelector('#infoRange_min')!;
    this.elem_price = newValue
  
  target.innerHTML = `${newValue} lei`;
  
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
