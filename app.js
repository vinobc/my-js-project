const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Jenkins CI/CD with Node.js!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // For testing purposes
