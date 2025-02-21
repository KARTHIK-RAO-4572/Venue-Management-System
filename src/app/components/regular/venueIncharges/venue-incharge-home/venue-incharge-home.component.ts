import { Component } from '@angular/core';
import { AdminNavComponent } from "../../../admin/admin-nav/admin-nav.component";
import { CookieService } from 'ngx-cookie-service';
import { HttpService } from '../../../../services/http.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue-incharge-home',
  imports: [AdminNavComponent,FormsModule,CommonModule],
  templateUrl: './venue-incharge-home.component.html',
  styleUrl: './venue-incharge-home.component.css'
})
export class VenueInchargeHomeComponent {

  venueInchargeName:any = "";
  venueName:any = "";
  bookings:any = []
  constructor(private cookie:CookieService,private httpClient:HttpService, private router:Router)
  {
    this.venueInchargeName = cookie.get('venueInchargeName');
    this.venueName = cookie.get('entity');
  }
  ngOnInit():void{
    this.httpClient.getConnection("http://localhost:3000","bookings",`venueName=${this.cookie.get('entity')}`).subscribe(
      (data)=>{
        this.bookings = data;
      }
    )
  }
  showColor(obj:any):string{
    if(obj.eventStatus=="Pending")
        {
          return "yellow";
        }
        else if(obj.eventStatus=="Approved")
          {
            return "rgb(88, 228, 114)";
          }
        else{
          return "red";
        }
  }
  map(booking:any,key:string){
    console.log("Clicked")
    if(key=="Accept")
    {
      booking.eventStatus = "Approved"
      console.log(booking.id);
      console.log(booking);
      this.httpClient.putConnection("http://localhost:3000","bookings",booking.id,booking).subscribe();
    }
    if(key=="Reject")
      {
        booking.eventStatus = "Rejected"
        this.httpClient.putConnection("http://localhost:3000","bookings",booking.id,booking).subscribe();
      }
    alert("Status Updated Sucessfully");
    this.router.navigate(['/venueIncharge/home'])
  }
  

}
