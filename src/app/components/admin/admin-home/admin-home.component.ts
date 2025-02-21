import { Component, viewChild } from '@angular/core';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { CommonModule } from '@angular/common';
import { AdminShowDataComponent } from "../admin-show-data/admin-show-data.component";
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AdminAddDataComponent } from "../admin-add-data/admin-add-data.component";
import { AdminUpdateDataComponent } from "../admin-update-data/admin-update-data.component";
import { AdminDeleteDataComponent } from "../admin-delete-data/admin-delete-data.component";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  imports: [AdminNavComponent, FormsModule, CommonModule, AdminShowDataComponent, AdminAddDataComponent, AdminUpdateDataComponent, AdminDeleteDataComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  adminName:string = "";
  constructor(private httpClient:HttpService, private cookie:CookieService, private router:Router){
    this.adminName = this.cookie.get('name');

  }


  databaseName:string = "admins";
  mydata:any = [];
  ref:any = {
    "admins":["Admin Id","Admin Name","Admin Contact"],
    "facultyCoordinators":["Faculty Id","Faculty Name","Contact","Department","Coordinator For"],
    "venueIncharges":["Incharge Id","Incharge Name","Incharge Contact","Venue Name"]
  }
  keys:any = [];
  role:string = "";
  onSubmit(appChild:AdminShowDataComponent){
    this.role = this.databaseName;
    if(this.databaseName!="")
    {
      this.httpClient.getConnection("http://localhost:3000",this.databaseName).subscribe(
        (data)=>{
          this.mydata = data;
          this.keys = this.ref[this.databaseName];
          console.log(this.mydata);
          appChild.update();
        }
      )

    }
    else{
      alert("Please select an option and submit form");
    }
  }

  ngOnInit():void{
    if(!this.cookie.check('isAuthenticated') || !this.cookie.get('isAuthenticated') ||this.cookie.get('role')!="admin")
    {
      // Did Not Login
      this.router.navigate(['/admin']);
      alert("Access Blocked! Login First");
    }
  }
}
