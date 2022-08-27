const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  likedBooks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
  userType: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
