const about = document.getElementById("aboutLink");
const darkmode = document.getElementById("darkLink");

const billiesBtn = document.getElementById("billiesBtnId");
// or
const billiesBtn = document.getElementsByClassName("billiesBtnClass");

billiesBtn.addEventListener("click"  blar blar blar)


///////ABOUT/////////
about.addEventListener("click", openAbout);
function openAbout() {
  alert("Welcome to Fake-Google\nThis service was created by Igor and Tom");
}

///////darkmode/////////
darkmode.addEventListener("click", swicthColours);
function swicthColours() {
  const mainbody = document.querySelector("body");
  mainbody.style.backgroundColor = "rgb(39, 39, 39)";
  const mytext = document.getElementsByClassName("navbar-nav");
  console.log(text, "has been selected");
  mytext.style;
}

// document.getElementById("demo").innerHTML = "Hello World";

// function myFunction() {
//
// }

// someElement.addEventListener("mouseup", handleMouseUp, passiveSupported
//                                ? { passive: true } : false);
