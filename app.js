const express = require("express");
const app = express();

const googleSearch = ["catsite1", "catsite2", "catsite3", "catsite4"];

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("/search", (req, res) => {
  res.send(googleSearch);
});

app.get("/search/:id", (req, res) => {
  res.send(googleSearch[req.params.id - 1]);
});

app.listen(3000, () => console.log("Server is live on port 3000!"));
