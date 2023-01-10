import { Component, NgModule } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { FormsModule, NgForm,FormGroup, FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgForm]
})
export class LoginComponent {
  formdata = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
 });
 loggedIn;


  constructor(private http: HttpClient, public router:Router) { 
    this.loggedIn=window.localStorage.getItem("logat");
    }

  sendForm(data){

    console.log(data.email)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('email', data.email).set('password', data.password);
    console.warn(data)
    this.http.post('https://localhost:7254/login', null, { headers: headers }).subscribe(response => {
      console.log(response)
      if(response!=null){
       
        
        console.log(response['rol'])
       window.localStorage.setItem("logat", response['rol']);

       
      }else{
        console.log("Ai uitat parola?")
      }
});
    this.formdata.reset();

    this.loggedIn=window.localStorage.getItem("logat");
    
  }

 
}
