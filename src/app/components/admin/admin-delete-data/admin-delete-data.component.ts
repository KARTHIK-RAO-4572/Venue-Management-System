import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-delete-data',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-delete-data.component.html',
  styleUrl: './admin-delete-data.component.css'
})
export class AdminDeleteDataComponent {
 constructor(private httpClient:HttpService)
  {

  }
// All Class Variables
role:string = "facultyCoordinators";
ref:any = {
  "admins":["adminId","adminName","adminPassword","adminContact"],
  "facultyCoordinators":["facultyId","facultyPassword","facultyName","facultyDepartment","facultyContact","CoordinatorFor"],
  "venueIncharges":["venueId","venueName","venueInchargeId","venueInchargeName","venueInchargePassword","venueInchargeContact"]
}
fields = this.ref[this.role];
token:string = "faculty";
copy:string ="";
updateFields(form:NgForm){
  this.fields = this.ref[this.role];
  this.copy = this.role;  
  if(this.role=="facultyCoordinators")
  {
    this.token = "faculty";
  }
  if(this.role=="admins")
    {
      this.token = "admin";
    }
    if(this.role=="venueIncharges")
      {
        this.token = "venueIncharge";
      }
  form.reset();
  this.role = this.copy;
}

entered_id:string = "";
//This executes when form is submitted
onSubmit()
{
  console.log(`${this.token}Id=${this.entered_id}`)
  this.httpClient.getConnection("http://localhost:3000",this.role,`${this.token}Id=${this.entered_id}`).subscribe(
    (data:any)=>{
      this.httpClient.deleteConnection("http://localhost:3000",this.role,data[0].id).subscribe(
        ()=>{
          alert("Deleted Successfully");
        }
      )
    })
}
}
