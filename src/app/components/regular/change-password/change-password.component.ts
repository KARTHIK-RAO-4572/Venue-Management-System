import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../../services/http.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-change-password',
  imports: [CommonModule,FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
inputData:any = [];
  constructor(private httpClient:HttpService,private cookie:CookieService){
    this.inputData= {
      "entered_id":this.cookie.get('Id'),
      "current_password":null,
      "new_password":null,
      "role":this.cookie.get('role')
    }
  }

  database:string = "admins";
  onSubmit(){
    //Checking User Credentials are Matched are not
    if(this.inputData.role=="faculty")
    {
      this.database = "facultyCoordinators";
    }
    else if(this.inputData.role=="venueIncharge")
    {
      this.database = "venueIncharges";
    }
    else{
      this.database = "admins";
    }
    console.log(this.inputData.role);
    console.log(`${this.inputData.role}Id=${this.inputData.entered_id}&${this.inputData.role}Password=${this.inputData.current_password}`);
      this.httpClient.getConnection("http://localhost:3000",this.database,`${this.inputData.role}Id=${this.inputData.entered_id}&${this.inputData.role}Password=${this.inputData.current_password}`).subscribe((data:any)=>{
        console.log(data);
        if(data.length==1)
        {
          data[0][`${this.inputData.role}Password`] = this.inputData.new_password;
          console.log(data[0]);
          this.httpClient.putConnection("http://localhost:3000",this.database, data[0].id,data[0]).subscribe();
          alert("Password Updated Successfully")

        }
        else{
          alert("Sorry Bad Credentials Used ❌")
        }
      })
  }

}
