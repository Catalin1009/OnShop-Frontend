import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register';
import { HaineComponent } from './haine/haine.component';
import { CalculatoareComponent } from './calculatoare/calculatoare.component';
import { ElectrocasniceComponent } from './electrocasnice/electrocasnice.component';
import { JucariiComponent } from './jucarii/jucarii.component';
import { TelevizoareComponent } from './televizoare/televizoare.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductComponent},
  { path: 'haine', component: HaineComponent},
  { path: 'calculatoare', component: CalculatoareComponent},
  { path: 'electrocasnice', component: ElectrocasniceComponent},
  { path: 'jucarii', component: JucariiComponent},
  { path: 'televizoare', component: TelevizoareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
