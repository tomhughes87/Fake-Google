const express = require("express");
const app = express();
const MygoogleSearch = require("./webdata");

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("/search", (req, res) => {
  res.send(MygoogleSearch);
});

app.get("/search/:id", (req, res) => {
  res.send(MygoogleSearch[req.params.id - 1]);
  res.sendFile("index.html");
});

app.get("/filetest", (req, res) => {
  res.sendFile("index.html");
});

app.listen(3000, () => console.log("Server is live on port 3000!"));
