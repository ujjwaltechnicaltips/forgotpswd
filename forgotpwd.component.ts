import { Component, OnInit } from '@angular/core';
import { ResetService } from '../forgotpwd/reset.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {
  response: any;
  loading = false;
  submitted = false;
  userId:string;
  password:string;
 constructor(private resetService:ResetService,private router : Router) { }
 
 ngOnInit( ) { }
   OnSubmit(userId, password){
    console.log("userId, password");
    this.resetService.userAuthentication(userId, password).subscribe((data : any)=>{
    console.log(data);
      localStorage.setItem('userToken',data.access_token);
       this.router.navigate(['/otp']);
     },
    ); 
    }
onLoggedin1(){localStorage.setItem('isLoggedin1', 'true'); 
}}
