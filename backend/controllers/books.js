const mongoose = require("mongoose");
const Books = require("../models/Books");

const addBook = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
      };
      filesArray.push(file);
    });

    const bookData = new Books({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      genre: req.body.genre,
      files: filesArray,
    });
    await bookData.save();
    res.status(201).send("Book Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const listBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).send(books);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const listSpecificBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Books.findById(id);
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await Books.findByIdAndRemove(id);
  res.json({ message: "Book deleted successfully" });
};

module.exports = { addBook, listBooks, deleteBook, listSpecificBook };
