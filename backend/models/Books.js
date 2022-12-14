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
    minLength: 3,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
  files: [Object],
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
      "Personal Growth",
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
