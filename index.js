const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();

// Set security HTTP headers
app.use(helmet());

// Set the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Define a simple route
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
