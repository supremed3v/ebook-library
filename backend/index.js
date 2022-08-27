const express = require("express");
var cors = require("cors");
const connectToDB = require("./db");

connectToDB();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/books", require("./routes/books"));

app.listen(port, () => {
  console.log(`App is running on port:${port}`);
});
