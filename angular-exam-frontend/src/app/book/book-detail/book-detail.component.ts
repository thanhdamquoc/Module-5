import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const bookId = +paramMap.get('id');
      this.bookService.getById(bookId).subscribe(book => {
        this.book = book;
      });
    });
  }

}
