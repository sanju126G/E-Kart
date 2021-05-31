import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { ProductInterface } from '../product-interface';
import { element } from 'protractor';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  constructor(private ps:ProductServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  isLoading:boolean = false;
  products:ProductInterface[];
  updateProduct:ProductInterface;
  message;
  error;
  decider:boolean = false;
  getProducts(){
    this.isLoading = true;
    this.decider = true;
    this.ps.getAllProducts().subscribe((res) => {
      if(!res.error){
        console.log(res);
        this.isLoading = false;
        this.products=  res.products;
        // console.log(this.products);
        
        this.message = "Products retrival Successfull"
        setTimeout(()=>{
          this.decider = false;
        },3000)
      }
      else {
        this.error = "failed to load the products"
      }
    },err => {
      this.error = "Server Error!! Server Not Responding"
      this.isLoading = false;
    })
  }

  deleteProduct(product:ProductInterface){
    this.isLoading = true;
    this.decider = true;
    const conformation = confirm("Are You Sure You Want To Delete These item");
    if(conformation){
      this.ps.deleteProduct(product._id).subscribe((res) => {
        if(!res.error){
          this.isLoading = false;
          this.products.splice(this.products.indexOf(product),1)
          this.message = 'Product Deleted Successfully'
          setTimeout(()=>{
            this.decider = false;
          },3000)
        }
        else {
          this.error ='Product Delete Failed'
        }
      },err => {
        this.error ="Server Error!!!"
      })
    }
  }

  edit(product){
    this.updateProduct = {...product};
    console.log(this.updateProduct);
    console.log(this.updateProduct.productName);
    
  }

  productUpdating:boolean;
@ViewChild('modelCloseButton',{static:true})
modelColseButton:ElementRef

  onSubmit(a){
    this.isLoading = true;
    this.productUpdating = true;
    this.decider = true;
    this.ps.updateProduct(this.updateProduct).subscribe(res => {
      if(!res.error) {
        this.isLoading = false;
        this.productUpdating = false;
        this.modelColseButton.nativeElement.click();
        this.products.splice(this.products.findIndex(element => element._id===res.response._id),1,res.response)
        setTimeout(()=>{
          this.decider = false;
        },3000)
        this.message="Product Updated Successfully"
      }
      else {
        this.error ='product Updation Failed'
      }
    },err => {
      this.error ='server Busy or Not found'
    })
  }

}
