import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent {
  products: any; 

  constructor(){
    console.log( window.localStorage.getItem("products")!)
    this.products = window.localStorage.getItem("products");
  }
  getAllItems(){
  

    return JSON.parse(window.localStorage.getItem("products")!)

  }
}
