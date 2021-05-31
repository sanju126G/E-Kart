import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private ps:ProductServiceService) { }

  ngOnInit(): void {
  }

  isLoading;
  message;
  error;
  decider = true;

  onFromSubmit(addProductForm) {
    this.isLoading = true;
    console.log(addProductForm.value);
    this.ps.postProducts(addProductForm.value).subscribe((res) => {
      addProductForm.reset();
      this.isLoading = false;
      if(!res.error){
        this.message = 'Product Added Successfully'
      }
      else {
        this.error = 'Failed To Add New Product To Into The API'
      }
    },err => {
      this.error  = 'Server Busy please Try Again Later'
    })
    
  }

}
