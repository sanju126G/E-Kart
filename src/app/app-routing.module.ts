import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AddProductsComponent } from './add-products/add-products.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PhoneComponent } from './phone/phone.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard }  from './auth.guard'


const routes: Routes = [
  {path:'Custom-pipe',component:CustomPipeComponent},
  {path:'Phone-Formater',component:PhoneComponent},
  {path:'Display-Products',component:DisplayProductsComponent,data:{roles:["admin","user"]},canActivate:[AuthGuard]},
  {path:'Add-Products',component:AddProductsComponent,data:{roles:["admin","user"]},canActivate:[AuthGuard]},
  {path:'register',component:RegisterPageComponent},
  {path:'login',component:LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
