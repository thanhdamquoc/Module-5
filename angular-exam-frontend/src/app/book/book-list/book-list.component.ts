import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.bookService.getAll().subscribe(books => this.books = books);
  }

}
