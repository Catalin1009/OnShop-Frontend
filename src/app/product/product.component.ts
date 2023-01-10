import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  showPopup = false;

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
    let products: { name: string, image: string }[] = [];
  if(localStorage.getItem('products')){
      products = JSON.parse(localStorage.getItem('products')!);
  }
  let name = window.localStorage.getItem("name")!
  let image = window.localStorage.getItem("image")!
  
  products.push({ name, image });
  console.log(products)
  
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
