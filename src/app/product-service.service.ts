import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductInterface } from './product-interface'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor( private http:HttpClient) { }
  
  getAllProducts() {
    return this.http.get<{error:boolean,message:string,products:ProductInterface[]}>('https://ty-shop.herokuapp.com/api/products')
  }

  postProducts(form){
    return this.http.post<{error:boolean,message:string,products:ProductInterface}>('https://ty-shop.herokuapp.com/api/products',form)
  }

  deleteProduct(id) {
    return this.http.delete<{error:boolean,message:string,products:ProductInterface}>(`${environment.baseUrl}api/products/${id}`)
  }

  updateProduct(product) {
    return this.http.put<{error:boolean,message:string,response:ProductInterface}>(`${environment.baseUrl}/api/products/${product._id}`,product)
  }


}
