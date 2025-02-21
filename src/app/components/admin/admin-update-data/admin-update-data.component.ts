import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { buffer } from 'stream/consumers';


@Component({
  selector: 'app-admin-update-data',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-update-data.component.html',
  styleUrl: './admin-update-data.component.css'
})
export class AdminUpdateDataComponent {
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
token:string ="faculty"
fields = this.ref[this.role];
copy:string ="";
updateFields(form:NgForm){
  console.log("Changed");
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
idToInsert:string = "";
inputData:any = []
dataToInsert:any = {}
//This executes when form is submitted
onSubmit()
{
  this.dataToInsert = {};

  //Constructing Data Object
  for(var i=0;i<this.fields.length;i++)
  {
    this.dataToInsert[this.fields[i]] = this.inputData[i]
  }
  this.httpClient.getConnection("http://localhost:3000",this.role,`${this.token}Id=${this.dataToInsert[`${this.token}Id`]}`).subscribe(
    (data:any)=>{
      this.idToInsert = data[0].id;
      this.httpClient.putConnection("http://localhost:3000",this.role,this.idToInsert,this.dataToInsert).subscribe(
        (data)=>{
          console.log(data);
          alert("Updated Successfully");
        }
      )
    }
  )
  
}
}
