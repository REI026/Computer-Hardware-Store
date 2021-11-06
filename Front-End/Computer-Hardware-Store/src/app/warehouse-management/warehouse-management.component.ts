import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warehouse-management',
  templateUrl: './warehouse-management.component.html',
  styleUrls: ['./warehouse-management.component.css']
})
export class WarehouseManagementComponent implements OnInit {
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
