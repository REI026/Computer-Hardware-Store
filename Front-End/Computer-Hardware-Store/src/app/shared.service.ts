import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44316/api";
  role : any;

  constructor( private http:HttpClient) {
  }

  getUsers():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/User/');
  }

  getUser(val: any) {
    return this.http.get<any>(this.APIUrl+'/User/'+`${val}`);
  }

  addUser(val: any) {
    return this.http.post(this.APIUrl+'/User/', val);
  }

  updateUser(val: any) {
    return this.http.put(this.APIUrl+'/User/', val);
  }

  deleteUser(val: any) {
    return this.http.delete(this.APIUrl+'/User/'+`${val}`);
  }

  // product
  getProducts():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/Product/');
  }

  getProduct(val: any) {
    return this.http.get<any>(this.APIUrl+'/Product/'+`${val}`);
  }

  getProductByType(val: any) {
    return this.http.get<any>(this.APIUrl+'/Product/'+`${val}`);
  }

  addProduct(val: any) {
    return this.http.post(this.APIUrl+'/Product/', val);
  }

  updateProduct(val: any) {
    return this.http.put(this.APIUrl+'/Product/', val);
  }

  deleteProduct(val: any) {
    return this.http.delete(this.APIUrl+'/Product/'+`${val}`);
  }

  setRole(role: any) {
    this.role = role;
  }

  getRole() {
    return this.role;
  }
  
}
