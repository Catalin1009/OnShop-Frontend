import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url="https://localhost:7254/produs/mostSold";
    return this.http.get(url);
  }
  getProductByCategory(category)
  {
    let url="https://localhost:7254/produs/"+ category;
    return this.http.get(url);
  }
  
}
