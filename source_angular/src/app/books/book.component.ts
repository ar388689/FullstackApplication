import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { BooksService } from "./books.service";

import "rxjs/add/operator/map";

@Component({
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    id: number;
    book: any;
    
    constructor(private _bookService: BooksService, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        this.book = this._bookService.getBook(this.id).subscribe(book=> {
            this.book = book;
        });
    }

    goBack(): void {
        this.location.back();
    }
}
