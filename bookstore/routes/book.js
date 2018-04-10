var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var books = require('../data/bookData');
var count=3;

router.use(function(req, res, next) {
     req.books = books;
     next();
});


router.get('/', function(req,res) {
    console.log('getting all books... ');
    books.find({}, function(err, books) {
        if(err) {
            res.send(err);
        }
        else {
         // console.log(books);
          res.json(books);
        }
    });
});

router.get('/:id', function(req, res, next) {
      console.log('gettting book by id... ');
  books.findOne({id: req.params.id}, function (err, book) {
        if (err)
            res.send(err);
        else {
           // console.log(book);
            res.json(book);
        }
    });
});

router.post('/', function(req, res) {
  var newBook = new books();
  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.isbn = parseInt(req.body.isbn);
  newBook.publicationDate = req.body.publicationDate;
  newBook.publisher = req.body.publisher;
  newBook.price = parseInt(req.body.price);
  newBook.genre = req.body.genre;
  newBook.format = req.body.format;
  newBook.id = count+1;

  newBook.save(function(err, book) {
      if(err){
        res.send(err);
      }
    else {
    //  console.log(book);
      res.json(book);
    }
  });
});

  router.delete('/:id', function(req, res) {
     console.log('deleting book by _id... ');
    books.remove({id: req.params.id}, function (err, book) {
        if (err)
            res.send(err);
        else {
         //   console.log(book);
            res.json(book);
        }
    });
});
router.put('/:id', function(req, res) {
  var updatedBook = {};
  updatedBook.author = req.body.author;
  updatedBook.title = req.body.title;
  updatedBook.price = parseInt(req.body.price);
  updatedBook.isbn = parseInt(req.body.isbn);
  updatedBook.publicationDate = req.body.publicationDate;
  updatedBook.publisher = req.body.publisher;
  updatedBook.genre = req.body.genre;
  updatedBook.format = req.body.format;
 
  books.findOneAndUpdate({id: req.params.id}, req.body, {new: true}, function(err, updatedBook) {
    if (err)
      res.send(err);
    res.json(updatedBook);
  });

});




module.exports = router;

