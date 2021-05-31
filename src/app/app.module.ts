import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneformaterPipe } from './phoneformater.pipe';
import { PhoneComponent } from './phone/phone.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthorizationInterceptor } from './authorization.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomPipeComponent,
    SearchPipe,
    PhoneformaterPipe,
    PhoneComponent,
    DisplayProductsComponent,
    SpinnerComponent,
    AddProductsComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthorizationInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
