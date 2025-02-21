import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-show-data',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-show-data.component.html',
  styleUrl: './admin-show-data.component.css'
})
export class AdminShowDataComponent {

  @Input() data:any;
  @Input() keys:any;
  @Input() role:any;
  isAdmin = false;
  isFaculty = false;
  isVenueIncharge = false;
  update(){
    console.log("Executing");
    if(this.role=='admins')
    {
      this.isAdmin = true;
      this.isFaculty = false;
      this.isVenueIncharge = false;
    }
    if(this.role=='facultyCoordinators')
      {
        this.isAdmin = false;
      this.isFaculty = true;
      this.isVenueIncharge = false;
      }
      if(this.role=='venueIncharges')
        {
      this.isAdmin = false;
      this.isFaculty = false;
      this.isVenueIncharge = true;
        }
  }

}
