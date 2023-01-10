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
    this.products = JSON.parse(window.localStorage.getItem("products")!);
    console.log(this.products[0])
  }
  getAllItems(){
  

    return JSON.parse(window.localStorage.getItem("products")!)

  }

  removeItem(product){
   
      const index = this.products.indexOf(product);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
      localStorage.setItem('products', JSON.stringify(this.products));

  }
}
