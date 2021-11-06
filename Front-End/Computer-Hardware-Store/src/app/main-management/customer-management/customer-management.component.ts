import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {

  customer: any = [];
  customer_detail: any = [];
  userID: any;
  content : any;
  email: any;
  name: any;
  phone: any;
  address: any;
  role: any;
  
  constructor(private service : SharedService, private location: Location) { 
    this.content = 0;
  }

  ngOnInit(): void {
    this.refreshUserList();
  }

  refreshUserList()  {
    this.service.getUsers().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        
        if (data[i].role == 3) {
          this.customer.push(data[i]);
        }
      }
    })
  }

  changeContent(id: any, userID: any) {
    this.userID = userID;
    for (var i = 0; i < this.customer.length; i++) {
      if (this.customer[i].id == this.userID) {
        this.customer_detail = this.customer[i];
      }
    }
    this.content = id;
  }

  addCustomer() {
    var val = {
      id: 0,
      email: this.email,
      name: this.name,
      phone: this.phone,
      address: this.address,
      role: 3
    }

    this.service.addUser(val).subscribe(res=> {
      window.location.reload();
    })
  }

  deleteCustomer(id: any) {
    console.log(id);
    this.service.deleteUser(id).subscribe(res=> {
      window.location.reload();
    })
  }

  updateCustomer(id: any) {
    var val = {
      id: id,
      email: this.email,
      name: this.name,
      phone: this.phone,
      address: this.address,
      role: 3
    }

    this.service.updateUser(val).subscribe(res=> {
      window.location.reload();
    })
  }

  Back() {
    this.location.back();
  }
}
