import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-warehouse-management',
  templateUrl: './warehouse-management.component.html',
  styleUrls: ['./warehouse-management.component.css']
})
export class WarehouseManagementComponent implements OnInit {
  
  list_type: any = [];
  sortType: any;
  sorted: any = [];
  product: any = [];
  product_detail: any = [];
  content : any;
  pdID: any;

  brand: any;
  model: any;
  detail: any;
  price: any;
  image: any;
  each: any;
  type: any;
  
  constructor(private service : SharedService, private location: Location) {
    this.content = 0;
   }

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList() {
    this.service.getProducts().subscribe(data => {
      this.product = data;
      this.list_type = data.filter((arr, index, self) => 
      index === self.findIndex((t) => (t.type === arr.type)));
      this.sorted = this.product;
    })
  }

  sortByType() {
    try {
      this.product = []
      console. log(this.sortType.type)
      for (var i = 0; i < this.sorted.length; i++) {
        if (this.sorted[i].type == this.sortType.type) {
          this.product.push(this.sorted[i]);
          console.log(this.product);
        }
      }
    } catch {
      window.location.reload();
    }
  }

  changeContent(cid: any, pdID: any) {
    this.pdID = pdID;
    for (var i = 0; i < this.product.length; i++) {
      
      if (this.product[i].id == this.pdID) {
        this.product_detail = this.product[i];
      }
    }
    this.content = cid;
  }

  addProduct() {
    var val = {
      id: 0,
      brand: this.brand,
      model: this.model,
      detail: this.detail,
      price: this.price,
      image: this.image,
      each: this.each,
      type: this.type
    }

    if (val.image == null) {
      val.image = "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";
    }

    this.service.addProduct(val).subscribe(res=> {
      window.location.reload();
    })
  }

  deleteProduct(id: any) {
    console.log(id);
    this.service.deleteProduct(id).subscribe(res=> {
      window.location.reload();
    })
  }

  updateProduct(id: any) {
    var val = {
      id: id,
      brand: this.brand,
      model: this.model,
      detail: this.detail,
      price: this.price,
      image: this.image,
      each: this.each,
      type: this.type
    }

    if(val.brand == null) { val.brand = this.product_detail.brand }
    if(val.model == null) { val.model = this.product_detail.model }
    if(val.detail == null) { val.detail = this.product_detail.detail }
    if(val.price == null) { val.price = this.product_detail.price }
    if(val.each == null) { val.each = this.product_detail.each }
    if(val.type == null) { val.type = this.product_detail.type }

    if (val.image == null) {
      if (this.product_detail.image == null) { val.image = "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"; }
      else { val.image = this.product_detail.image }
    }

    this.service.updateProduct(val).subscribe(res=> {
      window.location.reload();
    })
  }

  imgPlaceholder(img: any) {
    var str = "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg";
    if (img != null) {
      str = img;
    }
    return str;
  }

  Back() {
    this.location.back();
  }
}