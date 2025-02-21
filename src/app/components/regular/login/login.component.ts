import { Component } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Router } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  inputData:any = {
      'enteredId':null,
      'enteredPassword':null
    };
    isFaculty:boolean = true;
    database:string = "facultyCoordinators";
    role:string = "faculty";
    btn1Color:string = "#7ad53e";
    btn2Color:string = "#F0F0F0";
    constructor(private httpService:HttpService, private router:Router, private cookie:CookieService){}
    onSubmit(form:NgForm)
    {
      this.httpService.getConnection("http://localhost:3000",this.database,`${this.role}Id=${this.inputData.enteredId}&${this.role}Password=${this.inputData.enteredPassword}`).subscribe(
        (data:any)=>{
          if(data.length==1)
          {
            // User Credentials are correct
            alert("Login Successful!!")
            this.cookie.set('isAuthenticated','true');
            this.cookie.set('role',this.role);
            this.cookie.set('Id',data[0][`${this.role}Id`]);
            if(this.role=="faculty")
            {
              this.cookie.set('entity',data[0].CoordinatorFor);
            }
            else if(this.role=="venueIncharge"){
              this.cookie.set('entity',data[0].venueName);

            }
            console.log(this.cookie.get('Id'));
            this.cookie.set(`${this.role}Name`,data[0][`${this.role}Name`]);
            this.router.navigate([`/${this.role}/home`]);
          }
          else{
            //User Credentials are incorrect
            alert("Sorry Incorrect Credentials!!");
            form.reset();
          }
          }
      )
    }
    updateRole(form:NgForm, role:string=""){
      if(role=="faculty")
      {
        this.isFaculty = true;
        this.database = "facultyCoordinators";
        this.role = "faculty";
        this.btn1Color = "#7ad53e";
        this.btn2Color = "#F0F0F0";
      }
      else{
        this.isFaculty = false;
        this.database = "venueIncharges";
        this.role = "venueIncharge";
        this.btn1Color = "#F0F0F0";
        this.btn2Color = "#7ad53e";
      }
      form.reset();
    }

}
