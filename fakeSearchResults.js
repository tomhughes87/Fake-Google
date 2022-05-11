const blankDiv = document.querySelector("div");

fetch("http://localhost:3000/search/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
