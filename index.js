const about = document.getElementById("aboutLink");
const darkmode = document.getElementById("darkLink");

///////ABOUT/////////
about.addEventListener("click", openAbout);
function openAbout() {
  alert("Welcome to Fake-Google\nThis service was created by Igor and Tom");
}

///////darkmode/////////
darkmode.addEventListener("click", swicthColours);
function swicthColours() {
  alert("darkmode pressed");
}

// document.getElementById("demo").innerHTML = "Hello World";

// function myFunction() {
//
// }

// someElement.addEventListener("mouseup", handleMouseUp, passiveSupported
//                                ? { passive: true } : false);
