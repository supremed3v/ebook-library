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
    res.status(201).send("book Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { addBook };
