const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Jenkins CI/CD with Node.js!");
});

// New route added
app.get("/about", (req, res) => {
  res.send("About Page: Jenkins CI/CD with Node.js!!!!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // For testing purposes
