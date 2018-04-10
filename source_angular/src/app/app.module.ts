import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
import {Http, Headers} from '@angular/http';

import { AppComponent } from './app.component';
import { Routes, RouterModule} from '@angular/router';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book.component';
import { AddBookFormComponent } from './books/addbook-form.component';
import { EditBookFormComponent } from './books/editbook-form.component';
import { BookFilterPipe } from './books/books-filter.pipe';
import { BooksService } from './books/books.service';

@NgModule({
  declarations: [ AppComponent, AboutComponent, BooksComponent, BookComponent, AddBookFormComponent, EditBookFormComponent, BookFilterPipe 
  ],
  imports: [ BrowserModule, FormsModule,RouterModule, routing, HttpModule],
  providers: [ BooksService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
