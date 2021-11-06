import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-main-management',
  templateUrl: './main-management.component.html',
  styleUrls: ['./main-management.component.css']
})
export class MainManagementComponent implements OnInit {
  pagerole: any;
  constructor(private service: SharedService) { 
    this.pagerole = localStorage.getItem('role');
  }

  ngOnInit(): void {
  }
}
