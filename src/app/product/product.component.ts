import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  showPopup = false;

  constructor(){
    let products: { name: string, image: string, size: number , price: number}[] = [];
    if(localStorage.getItem('recentlyViewed')){
        products = JSON.parse(localStorage.getItem('recentlyViewed')!);
    }
    let name = window.localStorage.getItem("name")!
    let image = window.localStorage.getItem("image")!
    let price = parseInt(window.localStorage.getItem("price")!)!
    let numberOfItems = window.localStorage.getItem("numberOfItems")!
    let size = 1;
    let isExists = false;
    products.forEach(prod => {
        if(prod.name === name) {
          prod.size++;
          isExists = true;
        }
    });

    if(!isExists) {
        products.push({ name, image, size , price});
    }

    console.log(products);
    localStorage.setItem('recentlyViewed', JSON.stringify(products));
  console.log(localStorage.getItem('recentlyViewed'))
  }
  getImage(){
   
    return window.localStorage.getItem("image")
  }
  getName(){

    return window.localStorage.getItem("name")
  }
  getDescription(){

    return window.localStorage.getItem("description")
  }
  getPrice(){

    return window.localStorage.getItem("price")
  }

  getStoc(){

    return parseInt(window.localStorage.getItem("stoc")!);
  }
  isLogged(){
    return window.localStorage.getItem("logat");
  }

  addToCart(){
    let products: { name: string, image: string, size: number , price: number}[] = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products')!);
    }
    let name = window.localStorage.getItem("name")!
    let image = window.localStorage.getItem("image")!
    let price = parseInt(window.localStorage.getItem("price")!)!
    let numberOfItems = window.localStorage.getItem("numberOfItems")!
    let size = 1;
    let isExists = false;
    products.forEach(prod => {
        if(prod.name === name) {
          prod.size++;
          isExists = true;
        }
    });

    if(!isExists) {
        products.push({ name, image, size , price});
    }

    console.log(products);
    localStorage.setItem('products', JSON.stringify(products));
  this.showPopup = true;
  setTimeout(() => {
    this.showPopup = false;
  }, 4000);

  }
  
  closeModal() {
    document.querySelector("#popupModal")!.classList.remove("show");
    document.querySelector("#popupModal")!.removeAttribute("aria-modal");
}
}
