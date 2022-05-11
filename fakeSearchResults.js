const blankDiv = document.querySelector("div");
const apiPlace = document.getElementById("placeholderForAPI");

apiPlace.textContent = "tessssssssssssting";

fetch("http://localhost:3000/search/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    apiPlace.textContent = data.descriptions;
  });
