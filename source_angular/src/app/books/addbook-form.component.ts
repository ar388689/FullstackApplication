import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { BooksService } from './books.service';

@Component({
  selector: 'addBook-form',
  templateUrl: './addbook-form.component.html',
  styleUrls: ['./addbook-form.component.css']
})
export class AddBookFormComponent {
  title: String;
  author: String;
  isbn: number;
  publicationDate: Date;
  publisher: String;
  price: number;
  genre: String;
  format:String;
  genres: string[] = ["Comedy", "Science and Math", "Environment", "Medicine", "Dance", "Health", "Thriller", "romance" ];
  formats: string[] = ["kindle edition", "HardCover", "paperback", "audible", "Micosoft word"];
  constructor(private _bookService: BooksService, private router: Router) { }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let newBook = {
          title: formValue.title,
          author: formValue.author,
          isbn: formValue.isbn,
          publicationDate: formValue.publicationDate,
          publisher: formValue.publisher,
          price: formValue.price,
          genre: formValue.genre,
          format: formValue.format
        };
    this._bookService.addBook(newBook).subscribe(res=>this.router.navigate(['books']));
  }
}
