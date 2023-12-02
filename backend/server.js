require("dotenv").config();
const express = require("express");

const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
