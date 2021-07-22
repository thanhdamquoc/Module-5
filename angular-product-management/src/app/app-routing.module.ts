import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';


const routes: Routes = [{
  path: 'products',
  component: ProductListComponent
}, {
  path: 'products/create',
  component: ProductCreateComponent
}, {
  path: 'products/:id',
  component: ProductDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
