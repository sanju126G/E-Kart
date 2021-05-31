import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }

  isLoading:boolean;
  message:string;
  error:string;
  decider:boolean;

  ngOnInit(): void {
  }

  onLogin(formData){
    this.isLoading = true;
    this.decider = true;
    this.auth.loginUser(formData).subscribe(res => {
      this.isLoading =false;
      if(!res.error){
        localStorage.setItem("userDetails",JSON.stringify(res))
        this.route.navigate([`/display-product`])
        setTimeout(()=>{
          this.decider = false;
        },3000)
      }
      else {
        this.error = "Login Failed.Please Login Again"
      }
    },err => {
      this.error = "Server busy Try After Some Time"
    })
  }

}
