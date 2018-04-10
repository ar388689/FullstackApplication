import { Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BooksService {
  private _booksUrl = "http://localhost:3000/book";  
  constructor(private _http : Http) {}

  getBooks() {
    return this._http.get(this._booksUrl)
    .map(res=> res.json());
  }

  getBook(id: any) {
    return this._http.get("http://localhost:3000/book/"+id)
    .map(res=> res.json());
  }
  

  addBook(newBook: any) {
    console.log(newBook);
    var headers = new Headers();
    headers.append('content-Type','application/json');
    return this._http.post("http://localhost:3000/book",JSON.stringify(newBook),{headers:headers})
    .map(res=> res.json());
  }

  updateBook(updatedBook: any) {
   console.log(updatedBook);
   var headers = new Headers();
   headers.append('content-Type','application/json');
   return this._http.put("http://localhost:3000/book/"+updatedBook.id,JSON.stringify(updatedBook),{headers:headers})
   .map(res=> res.json());
  }

  deleteBook(id: any) {
    return this._http.delete("http://localhost:3000/book/"+id)
    .map(res=> res.json());
  }
}
