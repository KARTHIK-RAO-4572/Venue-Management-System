import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../../services/http.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  inputData:any = {
    'enteredId':null,
    'enteredPassword':null
  };

  constructor(private httpService:HttpService, private router:Router, private cookie:CookieService){}
  onSubmit()
  {
    console.log(`adminId=${this.inputData.enteredId}&adminPassword=${this.inputData.enteredPassword}`);
    this.httpService.getConnection("http://localhost:3000","admins",`adminId=${this.inputData.enteredId}&adminPassword=${this.inputData.enteredPassword}`).subscribe(
      (data:any)=>{
        console.log(data);
        if(data.length==1)
        {
          // User Credentials are correct
          alert("Login Successful!!");
          this.cookie.set('isAuthenticated','true');
          this.cookie.set('role','admin');
          this.cookie.set('ID',data[0].adminId);
          this.cookie.set('name',data[0].adminName);
          this.router.navigate(['/admin/home']);
        }
        else{
          //User Credentials are incorrect
          alert("Credentials are Wrong ra babu");
        }
        }
    )

  }


}
