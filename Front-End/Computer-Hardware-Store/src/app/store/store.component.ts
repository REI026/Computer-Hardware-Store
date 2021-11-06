import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

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
