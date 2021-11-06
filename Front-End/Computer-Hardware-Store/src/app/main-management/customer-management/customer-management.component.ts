import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {

  customer: any = [];
  content : any;
  
  constructor(private service : SharedService) { 
    this.content = 0;
  }

  ngOnInit(): void {
    this.refreshUserList();
    if (this.customer.id == null) {
      this.customer = [
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
      this.customer = data;
      console.log(this.customer);
    })
  }

  changeContent(id: any) {
    if (this.content != 0) {
      this.content = 0;
    } else {
      this.content = id;
    }
  }
}
