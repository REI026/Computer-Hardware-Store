import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pagerole: any;

  constructor(private service : SharedService) {
   }

  ngOnInit(): void {
  }

  setRole(role : any) {
    this.pagerole = role;
    this.service.setRole(this.pagerole);
    localStorage.setItem('role', role);
  }
}
