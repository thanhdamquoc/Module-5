import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductDetailsComponent} from './product-details/product-details.component';


const routes: Routes = [{
  path: '',
  component: ProductListComponent
}, {
  path: 'add',
  component: ProductAddComponent
}, {
  path: ':id',
  component: ProductDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule {
}
