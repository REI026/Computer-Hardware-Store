import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  products: any = [
    { img : "X",
      brand : "X",
      name : "X",
      des : "X",
      price : "X",
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
