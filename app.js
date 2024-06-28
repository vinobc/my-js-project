const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Jenkins CI/CD with Node.js!");
  res.send("Hello again..");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server }; // Export the server instance for testing
