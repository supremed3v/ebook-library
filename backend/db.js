const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://developer:developer@lib-backend.vqmxwrp.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = () => {
  mongoose.connect(dbURI, () => {
    console.log("Connected to mongoDB successfully");
  });
};

module.exports = connectToDB;
