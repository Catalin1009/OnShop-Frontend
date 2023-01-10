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
  rangeValueMin: () => void = () => {};

  constructor(private user:UsersService){
   
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
  this.rangeValueMin = () => {
  const newValue = this.elem_min.value;
  const target = (document.querySelector('.valueMin') as any);
  target.innerHTML = `${newValue} lei` as any;
};
    
}
onInputChange(event: any) {
  this.elem_min = document.querySelector('#inp-pret-min')! ;
  let target = document.querySelector('#infoRange_min')!;
  let newValue = this.elem_min.value;
  this.rangeValueMin = () => {
  newValue = this.elem_min.value;
  console.log(newValue)
  target = document.querySelector('#infoRange_min')!;

};
target.innerHTML = `${newValue} lei`;
console.log(target);
console.log(newValue);

for(let  i = 0; i <= this.prices.length; i++){
  if(this.prices[i] < newValue){
    this.removeElement(this.images, i);
  }else{
   //TODO:complete
  }
}

}
  
  removeElement(arr, i){

    for(let j = i; i< arr.length -1 ; i++){
        for(let k = i+1; k< arr.length; k++){
          arr[k]=arr[k+1]
        }
    }
  }
  filterByPrice(){
    
  }
}
