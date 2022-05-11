const express = require("express");
const app = express();
const cors = require("cors");
const MygoogleSearch = require("./webdata");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("/search", (req, res) => {
  res.send(MygoogleSearch);
});

app.get("/search/:id", (req, res) => {
  res.send(MygoogleSearch[req.params.id - 1]);
});

app.get("/filetest", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log("hiiiiiiii");
  //res.send(MygoogleSearch[req.params.id - 1]);
});

app.listen(3000, () => console.log("Server is live on port 3000!"));
