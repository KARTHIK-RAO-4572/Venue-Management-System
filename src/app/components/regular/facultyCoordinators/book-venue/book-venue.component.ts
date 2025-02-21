import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../../services/http.service';
import { CookieService } from 'ngx-cookie-service';
import { AdminNavComponent } from "../../../admin/admin-nav/admin-nav.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-venue',
  imports: [FormsModule, CommonModule, AdminNavComponent],
  templateUrl: './book-venue.component.html',
  styleUrl: './book-venue.component.css'
})
export class BookVenueComponent {

  inputData:any = {
    "eventStatus":"Pending",
    "remarks":"NA"
  }
  constructor(private httpClient:HttpService, private cookie:CookieService,private router:Router)
  {
    this.inputData.facultyId = cookie.get('Id');
    this.inputData.clubName = this.cookie.get('entity');
  }
venues:any = []
  ngOnInit():void{
    this.httpClient.getConnection("http://localhost:3000","venueIncharges").subscribe(
      (data:any)=>{
        this.venues = data;
      }
    )
  }
  onSubmit()
  {
    this.httpClient.getConnection("http://localhost:3000","facultyCoordinators",`facultyId=${this.inputData.facultyId}`).subscribe(
      (data:any)=>{
        this.inputData.facultyContact = data[0].facultyContact;
        console.log(data);
        console.log(this.inputData);
        this.httpClient.getConnection("http://localhost:3000","venueIncharges",`venueName=${this.inputData.venueRequested}`).subscribe(
          (data1:any)=>{
        console.log(data1);
            this.inputData.venueInchargeContact = data1[0].venueInchargeContact;
        console.log(this.inputData);
            this.httpClient.postConnection("http://localhost:3000","bookings",this.inputData).subscribe(
              (data2)=>{
                alert("Booking Request Made Successfully");
                this.router.navigate(['/faculty/home']);
              }
            )
          }
        )
      }
    )
    
    


  }

}
