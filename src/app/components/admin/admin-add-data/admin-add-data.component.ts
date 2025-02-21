import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-add-data',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-add-data.component.html',
  styleUrl: './admin-add-data.component.css'
})
export class AdminAddDataComponent {

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
  copy:string ="";
  updateFields(form:NgForm){
    console.log("Changed");
    this.fields = this.ref[this.role];
    this.copy = this.role;  
    form.reset();
    this.role = this.copy;

  }
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
    console.log(this.dataToInsert);
    this.httpClient.postConnection("http://localhost:3000",this.role,this.dataToInsert).subscribe(
      (data)=>{
        console.log(data);
        alert("Added Successfully");
      }
    )
  }

}
