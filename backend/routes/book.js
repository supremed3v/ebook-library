const express = require("express");
const {
  addBook,
  listBooks,
  deleteBook,
  listSpecificBook,
} = require("../controllers/books");
const { upload } = require("../middleware/filehelper");
const router = express.Router();

router.post("/addbook", upload.array("files"), addBook);
router.get("/list-books", listBooks);
router.get("/find-book/:id", listSpecificBook);
router.delete("/delete-book/:id", deleteBook);
module.exports = {
  routes: router,
};
