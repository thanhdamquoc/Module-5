import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helper/auth-guard';


const routes: Routes = [{
  path: 'products',
  canActivate: [AuthGuard],
  loadChildren: () => import('./product-management/product-management.module').then(module => module.ProductManagementModule)
}, {
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
