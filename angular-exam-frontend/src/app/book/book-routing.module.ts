import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookAddComponent} from './book-add/book-add.component';
import {BookEditComponent} from './book-edit/book-edit.component';


const routes: Routes = [{
  path: '',
  component: BookListComponent
}, {
  path: 'add',
  component: BookAddComponent
}, {
  path: ':id',
  component: BookDetailComponent
}, {
  path: ':id/edit',
  component: BookEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
