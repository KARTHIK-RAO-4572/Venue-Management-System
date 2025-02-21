import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-nav',
  imports: [],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {
  role:string = "";
  constructor(private cookie:CookieService)
  {
    this.role = cookie.get('role');
  }

}
