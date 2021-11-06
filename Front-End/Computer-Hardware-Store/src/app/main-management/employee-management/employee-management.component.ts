import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  employee: any = [];
  employee_detail: any = [];
  userID: any;
  content : any;
  email: any;
  name: any;
  phone: any;
  address: any;
  role: any;

  
  constructor(private service : SharedService, private location: Location, private router: Router) {
    this.content = 0;
   }

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList() {
    this.service.getUsers().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        
        if (data[i].role != 3) {
          this.employee.push(data[i]);
        }
      }
    })
  }

  changeContent(id: any, userID: any) {
    this.userID = userID;
    for (var i = 0; i < this.employee.length; i++) {
      if (this.employee[i].id == this.userID) {
        this.employee_detail = this.employee[i];
      }
    }
    this.content = id;
  }

  addEmployee() {
    var val = {
      id: 0,
      email: this.email,
      name: this.name,
      phone: this.phone,
      address: this.address,
      role: this.role
    }

    this.service.addUser(val).subscribe(res=> {
      window.location.reload();
    })
  }

  deleteEmployee(id: any) {
    console.log(id);
    this.service.deleteUser(id).subscribe(res=> {
      window.location.reload();
    })
  }

  updateEmployee(id: any) {
    var val = {
      id: id,
      email: this.email,
      name: this.name,
      phone: this.phone,
      address: this.address,
      role: this.role
    }

    this.service.updateUser(val).subscribe(res=> {
      window.location.reload();
    })
  }

  Back() {
    this.location.back();
  }

  Role(role: any) {
    var str="";
    if(role == 0) {str="ผู้จัดการ"}
    if(role == 1) {str="พนักงานคลังสินค้า"}
    if(role == 2) {str="พนักงานขาย"}
    else {str = role}
    return str;
  }
}
