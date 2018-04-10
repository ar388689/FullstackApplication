import { Component, OnInit } from '@angular/core';
import { BooksService } from "./books.service";
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
  titleFilter: string="";
  constructor(private _bookService: BooksService) { }

  ngOnInit() {
    this.books = this._bookService.getBooks().subscribe(books=>{
      this.books=books;
    });
    console.log(this.books);
  }

  deleteBook(id: any) {
    this._bookService.deleteBook(id).subscribe();
    this.books = this._bookService.getBooks().subscribe(books=>{
      this.books=books;
    });    
  }
}
