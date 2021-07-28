import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  addNewBook() {
    this.bookService.addBook(this.book).subscribe(book => {
        alert(book.title + ' added');
        this.book = {};
      }
    );
  }
}
