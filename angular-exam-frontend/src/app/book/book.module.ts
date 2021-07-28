import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddComponent } from './book-add/book-add.component';
import {FormsModule} from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';


@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BookAddComponent, BookEditComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
  ]
})
export class BookModule { }
