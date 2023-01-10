import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  getImage(){
    console.log(window.localStorage.getItem("image"))
    return window.localStorage.getItem("image")
  }
  getName(){
    console.log(window.localStorage.getItem("image"))
    return window.localStorage.getItem("name")
  }
  getDescription(){
    console.log(window.localStorage.getItem("image"))
    return window.localStorage.getItem("description")
  }
  getPrice(){
    console.log(window.localStorage.getItem("price"))
    return window.localStorage.getItem("price")
  }

  getStoc(){
    console.log(window.localStorage.getItem("price"))
    return parseInt(window.localStorage.getItem("stoc")!);
  }
  isLogged(){
    return window.localStorage.getItem("logat");
  }
}
