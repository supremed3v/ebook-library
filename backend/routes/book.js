const express = require("express");
const { addBook, listBooks, deleteBook } = require("../controllers/books");
const { upload } = require("../middleware/filehelper");
const router = express.Router();

router.post("/addbook", upload.array("files"), addBook);
router.get("list-books", listBooks);
router.delete("/delete-book/:id", deleteBook);
module.exports = {
  routes: router,
};
