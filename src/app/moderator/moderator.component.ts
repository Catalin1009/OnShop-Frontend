import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.scss']
})

export class ModeratorComponent {
  logat;
  constructor(private http:HttpClient) { this.logat = window.localStorage.getItem("logat") }


  newProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    size: '',
    stock: 0,
    is_imported: false,
    color:'',
    sold:0,
    produs:''
  };
  editProductId = 0;
  removeProductId = 0;
  products: any[] = [];

  addProduct() {
    let url = "https://localhost:7254/produs/";
    let produs = {
      id: this.newProduct.id,
      name: this.newProduct.name,
      description: this.newProduct.description,
      price: this.newProduct.price,
      imag: this.newProduct.image,
      category: this.newProduct.category,
      size: this.newProduct.size,
      stock: this.newProduct.stock,
      is_imported: this.newProduct.is_imported,
      color:this.newProduct.color,
      sold:this.newProduct.sold,
      materials:["test", "test2"],
      produs: "produs"
    };
  
    this.http.post(url, produs).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editProduct() {
    let url = "https://localhost:7254/produs/";
    let produs = {
      id: this.newProduct.id,
      name: this.newProduct.name,
      description: this.newProduct.description,
      price: this.newProduct.price,
      imag: this.newProduct.image,
      category: this.newProduct.category,
      size: this.newProduct.size,
      stock: this.newProduct.stock,
      is_imported: this.newProduct.is_imported,
      color:this.newProduct.color,
      sold:this.newProduct.sold,
      materials:["test", "test2"],
      produs: "produs"
    };
  
    this.http.put(url, produs).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeProduct() {
    let url = "https://localhost:7254/produs/" + this.newProduct.id;
    let produs = {
      id: this.newProduct.id
    };
  
    this.http.delete(url).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
