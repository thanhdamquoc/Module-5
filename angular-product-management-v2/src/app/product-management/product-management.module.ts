import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductManagementRoutingModule} from './product-management-routing.module';
import {ProductAddComponent} from './product-add/product-add.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [ProductListComponent, ProductAddComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    FormsModule
  ]
})
export class ProductManagementModule {
}
