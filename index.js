const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();

// Set security HTTP headers only in production
if (process.env.NODE_ENV !== "development") {
  app.use(helmet());
}

// Set the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// Define a simple route
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
