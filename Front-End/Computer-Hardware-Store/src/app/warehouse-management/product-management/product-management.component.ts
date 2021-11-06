import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

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
