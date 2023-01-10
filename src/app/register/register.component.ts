import { Component } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { FormsModule, NgForm,FormGroup, FormControl} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [NgForm]
})
export class RegisterComponent {

  constructor(private http: HttpClient) { 
  }
  formdata = new FormGroup({
    email: new FormControl(),
    parola: new FormControl(),
    nume: new FormControl(),
    prenume: new FormControl(),
    username: new FormControl(),
    
 });

  sendForm(data){

    console.log(data.email)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('email', data.email).set('parola', data.parola)
    .set('username', data.username).set('nume', data.nume).set('prenume', data.prenume).set('username', data.username);
    console.warn(data)
    this.http.post('https://localhost:7254/register', null, { headers: headers }).subscribe(response => {
      if(response==true){
       console.log("Yay, te-ai inregistrat")
      }
}); this.formdata.reset();
}
}
