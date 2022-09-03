const express = require("express");
var cors = require("cors");
const connectToDB = require("./db");
const bookRoutes = require("./routes/book");
const path = require("path");

connectToDB();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/books", bookRoutes.routes);

app.listen(port, () => {
  console.log(`App is running on port:${port}`);
});
