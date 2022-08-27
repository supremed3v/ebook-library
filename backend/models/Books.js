const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    maxLength: 20,
  },
  summary: {
    type: String,
    required: true,
    maxLength: 200,
  },
  selectedFile: String,
  ebook_url: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
    enum: [
      "Mystery",
      "Thriller",
      "Horror",
      "Romance",
      "Science Fiction",
      "Fantasy",
      "Historical",
    ],
  },
  likeCount: {
    type: Number,
  },
  comment: {
    type: String,
    maxLength: 255,
  },
});

const Books = mongoose.model("books", BooksSchema);

module.exports = Books;
