import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  employee: any = [];
  content : any;
  
  constructor(private service : SharedService, private location: Location) {
    this.content = 0;
   }

  ngOnInit(): void {
    this.refreshUserList();
    if (this.employee.id == null) {
      this.employee = [
        {
          id : "a",
          email : "a",
          name : "a",
          phone : "a",
          address : "a"
        }
      ]
    }
  }

  refreshUserList() {
    this.service.getUsers().subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    })
  }

  changeContent(id: any) {
    if (this.content != 0) {
      this.content = 0;
    } else {
      this.content = id;
      this.refreshUserList();
    }
  }

  Back() {
    this.location.back();
  }
}
