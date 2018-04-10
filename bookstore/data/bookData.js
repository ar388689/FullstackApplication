var mongoose =require('mongoose');
var util=require('util');
var app=require('express');

var bookSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  isbn: Number,
  publicationDate: Date,
  publisher: String,
  price: Number,
  genre: String,
  format: String,
});

const Book = module.exports= mongoose.model('book', bookSchema, 'books');

