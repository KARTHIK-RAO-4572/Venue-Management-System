import { Component } from '@angular/core';
import { AdminNavComponent } from "../../../admin/admin-nav/admin-nav.component";
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-faculty-home',
  imports: [AdminNavComponent,FormsModule,CommonModule],
  templateUrl: './faculty-home.component.html',
  styleUrl: './faculty-home.component.css'
})
export class FacultyHomeComponent {

  bookings:any = []
  facultyName:string = "";
  constructor(private cookie:CookieService,private httpClient:HttpService)
  {
    this.facultyName = cookie.get('facultyName');
    console.log(cookie.get('Id'));
  }
  ngOnInit():void{
    this.httpClient.getConnection("http://localhost:3000","bookings",`facultyId=${this.cookie.get('Id')}`).subscribe(
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

}
