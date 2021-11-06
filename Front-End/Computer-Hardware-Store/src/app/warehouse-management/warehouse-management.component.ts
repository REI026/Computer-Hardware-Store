import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-warehouse-management',
  templateUrl: './warehouse-management.component.html',
  styleUrls: ['./warehouse-management.component.css']
})
export class WarehouseManagementComponent implements OnInit {
  product: any = [];

  content : any;
  
  constructor(private service : SharedService, private location: Location) {
    this.content = 0;
   }

  ngOnInit(): void {
    this.refreshUserList();
    if (this.product.id == null) {
      this.product = [
        {
          id : "a",
          img : "a",
          brand : "a",
          name : "a",
          des : "a",
          price : "a",
          type : "a",
          each : "a",
        }
      ]
    }
  }

  refreshUserList() {
    this.service.getUsers().subscribe(data => {
      this.product = data;
      console.log(this.product);
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