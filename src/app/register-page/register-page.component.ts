import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  isLoading:boolean;
  message:string;
  error:string;
  decider:boolean;

  onRegister(formData){
    this.isLoading=true;
    this.decider=true;
this.auth.registerUser(formData.value).subscribe(res => {
  this.isLoading=false;
  formData.reset();
  setTimeout(()=>{
    this.decider = false;
  },3000)
  if(!res.error){
    this.message ="User Registered Successfully"
  }
  else {
    this.error = "User registration failed"
  }
},err => {
  this.error = "Server Not Responding..."
})
  }

}
