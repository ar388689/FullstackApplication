import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BooksService } from "./books.service";

@Component({
  selector: 'editbook-form',
  templateUrl: './editbook-form.component.html'
})
export class EditBookFormComponent {
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
  

  constructor(private _bookService: BooksService, private route: ActivatedRoute, private router: Router) { }
  id: any;
  book: any = {};

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
          this.id = +params['id'];
      });
      this.book = this._bookService.getBook(this.id).subscribe(book => {
        this.book=book;
      });
  }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let updatedBook = {
          id: this.book.id,
          title: formValue.title,
          author: formValue.author,
          isbn: formValue.isbn,         
          publicationDate: formValue.publicationDate,
          publisher: formValue.publisher,
          price: formValue.price,
          genre: formValue.genre,
          format: formValue.format
        };
    this._bookService.updateBook(updatedBook).subscribe(res=>this.router.navigate(['books']));
  }
}
