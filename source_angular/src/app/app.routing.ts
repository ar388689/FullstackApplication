import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book.component';
import { AddBookFormComponent } from './books/addbook-form.component';
import { EditBookFormComponent } from './books/editbook-form.component';

const appRoutes: Routes = [
  { pathMatch: 'full' , path: '', component: AboutComponent },
  { pathMatch: 'full', path: 'books', component: BooksComponent },
  { pathMatch: 'full', path: 'books/:id', component: BookComponent },
  { pathMatch: 'full', path: 'addBook', component: AddBookFormComponent},
  { pathMatch: 'full', path: 'editBook/:id', component: EditBookFormComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
