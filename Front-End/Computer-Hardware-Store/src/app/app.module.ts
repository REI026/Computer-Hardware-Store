import { NgModule } from '@angular/core';
import { NgbModule, NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItem } from 'primeng/api';

import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {SelectButtonModule} from 'primeng/selectbutton';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MainManagementComponent } from './main-management/main-management.component';
import { WarehouseManagementComponent } from './warehouse-management/warehouse-management.component';
import { StoreComponent } from './store/store.component';
import { EmployeeManagementComponent } from './main-management/employee-management/employee-management.component';
import { CustomerManagementComponent } from './main-management/customer-management/customer-management.component';
import { ProductManagementComponent } from './warehouse-management/product-management/product-management.component';
import { LoginComponent } from './login/login.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MainManagementComponent,
    WarehouseManagementComponent,
    StoreComponent,
    EmployeeManagementComponent,
    CustomerManagementComponent,
    ProductManagementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    TableModule,
    DropdownModule,
    InputTextModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    Ng2SearchPipeModule,
    SelectButtonModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
