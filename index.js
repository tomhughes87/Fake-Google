const about = document.getElementById("aboutLink");
const darkmode = document.getElementById("darkLink");

///////ABOUT/////////
about.addEventListener("click", openAbout);
function openAbout() {
  alert("Welcome to Fake-Google\nThis service was created by Igor and Tom");
}

// const mainbody = document.querySelector("p");
// mainbody.style.backgroundColor = "rgb(39, 39, 39)";
// mainbody.style.color = "red";

///////darkmode/////////
darkmode.addEventListener("click", swicthColours);
const darkOn = false;

function swicthColours(e) {
  e.preventDefault();
  let mainbody = document.querySelector("body");

  if ((darkOn = false)) {
    mainbody.style.backgroundColor = "rgb(39, 39, 39)";
    mainbody.style.color = "white";
    let darkOn = true;
  } else {
    mainbody.style.backgroundColor = "white";
    mainbody.style.color = "black";
    let darkOn = true;
  }
}
