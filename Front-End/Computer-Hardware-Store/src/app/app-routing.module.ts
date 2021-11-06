import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainManagementComponent } from './main-management/main-management.component';
import { WarehouseManagementComponent } from './warehouse-management/warehouse-management.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { EmployeeManagementComponent } from './main-management/employee-management/employee-management.component';
import { CustomerManagementComponent } from './main-management/customer-management/customer-management.component';
import { ProductManagementComponent } from './warehouse-management/product-management/product-management.component';


const routes: Routes = [
  { path:'', component : LoginComponent },
  { path:'main', component : MainManagementComponent },
  { path:'warehouse', component : WarehouseManagementComponent },
  { path:'store', component : StoreComponent },
  { path:'main/employee', component : EmployeeManagementComponent },
  { path:'main/customer', component : CustomerManagementComponent },
  { path:'warehouse/product', component : ProductManagementComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
