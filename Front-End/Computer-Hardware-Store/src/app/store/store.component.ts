import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
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
