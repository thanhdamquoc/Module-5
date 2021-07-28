import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {};

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

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

  deleteBook() {
    const isSure = confirm('Are you sure you want to delete book ' + this.book.title);
    if (isSure) {
      this.bookService.deleteBook(this.book.id).subscribe(() => {
        this.router.navigateByUrl('/books');
      });
    }
  }

  updateBook() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(book => {
      alert(book.title + ' updated');
    });
  }
}
