const express = require("express");
const { addBook } = require("../controllers/books");
const { upload } = require("../middleware/filehelper");
const router = express.Router();

router.post("/addbook", upload.array("files"), addBook);

module.exports = {
  routes: router,
};
